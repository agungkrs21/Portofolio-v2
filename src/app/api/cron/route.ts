import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';

import { getRecentCommits } from '@/lib/github/github';

export async function GET(request: NextRequest) {
  if (!process.env.CRON_SECRET) {
    throw new Error('CRON_SECRET is not configured.');
  }

  const auth = request.headers.get('authorization');

  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 },
    );
  }

  try {
    const commits = await getRecentCommits();

    await put('recent-commits.json', JSON.stringify(commits), {
      access: 'public',
      addRandomSuffix: false,
      contentType: 'application/json',
    });

    return NextResponse.json({
      success: true,
      updated: commits.length,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to update recent commits.',
      },
      {
        status: 500,
      },
    );
  }
}
