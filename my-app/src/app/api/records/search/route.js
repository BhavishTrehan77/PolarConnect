import { NextResponse } from "next/server";
import { searchRecords } from "../../../../services/records/recordSearchServices";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const q = searchParams.get("q")?.trim() || "";
    const region = searchParams.get("region")?.trim() || "";
    const theme = searchParams.get("theme")?.trim() || "";
    const yearParam = searchParams.get("year")?.trim() || "";
    const type = searchParams.get("type")?.trim() || "";

    const pageParam = searchParams.get("page") || "1";
    const limitParam = searchParams.get("limit") || "12";

    const page = Number(pageParam);
    const limit = Number(limitParam);

    /*
     * Validate pagination at the API boundary.
     */
    if (
      !Number.isInteger(page) ||
      page < 1 ||
      !Number.isInteger(limit) ||
      limit < 1 ||
      limit > 100
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid page or limit",
        },
        { status: 400 }
      );
    }

    const result = await searchRecords({
      q,
      region,
      theme,
      yearParam,
      type,
      page,
      limit,
    });

    return NextResponse.json({
      success: true,
      ...result,
    });
  } catch (error) {
    console.error("Error searching news records:", error);

    const status = error.status || 500;

    return NextResponse.json(
      {
        success: false,
        error:
          status === 400
            ? error.message
            : "Failed to search records",
      },
      { status }
    );
  }
}