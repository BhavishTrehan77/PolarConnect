import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = (searchParams.get('q') || '').toLowerCase();
    const region = (searchParams.get('region') || '').toLowerCase();
    const theme = (searchParams.get('theme') || '').toLowerCase();
    const year = searchParams.get('year') || '';
    const type = (searchParams.get('type') || '').toLowerCase();

    // Read NCPOR news raw JSON dataset from root data directory
    const dataPath = path.join(process.cwd(), '..', 'data', 'raw', 'ncpor_news_raw.json');
    let rawRecords = [];

    if (fs.existsSync(dataPath)) {
      const fileData = fs.readFileSync(dataPath, 'utf-8');
      rawRecords = JSON.parse(fileData);
    }

    // Map raw records into normalized PolarConnect records
    let records = rawRecords.map((item, index) => {
      const pubYear = item.pub_date ? new Date(item.pub_date).getFullYear().toString() : '2026';
      
      // Determine pseudo-region & theme for testing if not explicitly present
      let itemRegion = 'Antarctica';
      if (item.title.toLowerCase().includes('ocean') || item.description.toLowerCase().includes('ocean')) {
        itemRegion = 'Southern Ocean';
      } else if (item.title.toLowerCase().includes('arctic') || item.description.toLowerCase().includes('arctic')) {
        itemRegion = 'Arctic';
      }

      let itemTheme = 'Polar Science';
      if (item.title.toLowerCase().includes('hydrography') || item.description.toLowerCase().includes('mapping')) {
        itemTheme = 'Hydrography';
      } else if (item.title.toLowerCase().includes('scar') || item.title.toLowerCase().includes('conference')) {
        itemTheme = 'Climate Change';
      }

      // Assign type mix for demonstration (News, Expedition, Researcher, Photo)
      let itemType = 'News';
      if (index % 4 === 1) itemType = 'Expedition';
      else if (index % 4 === 2) itemType = 'Researcher';
      else if (index % 4 === 3) itemType = 'Photo';

      return {
        id: (index + 1).toString(),
        title: item.title,
        description: item.description,
        pub_date: item.pub_date,
        publishedDate: item.pub_date,
        year: pubYear,
        sourceUrl: item.source_url,
        region: itemRegion,
        theme: itemTheme,
        type: itemType,
        imageUrl: `https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80`
      };
    });

    // Apply Filters
    if (q) {
      records = records.filter(r => 
        r.title.toLowerCase().includes(q) || 
        r.description.toLowerCase().includes(q) ||
        r.region.toLowerCase().includes(q) ||
        r.theme.toLowerCase().includes(q)
      );
    }

    if (region) {
      records = records.filter(r => r.region.toLowerCase().includes(region));
    }

    if (theme) {
      records = records.filter(r => r.theme.toLowerCase().includes(theme));
    }

    if (year) {
      records = records.filter(r => r.year === year);
    }

    if (type && type !== 'all') {
      records = records.filter(r => r.type.toLowerCase() === type);
    }

    return NextResponse.json({
      success: true,
      total: records.length,
      page: 1,
      limit: 12,
      records: records
    });
  } catch (error) {
    console.error('Error fetching search records:', error);
    return NextResponse.json({ success: false, error: 'Failed to search records' }, { status: 500 });
  }
}
