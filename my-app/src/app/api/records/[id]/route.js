import { NextResponse } from "next/server";
import { getRecordById } from "@/services/records/recordService";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "Record ID is required",
        },
        { status: 400 }
      );
    }

    const record = await getRecordById(id);

    return NextResponse.json({
      success: true,
      record,
    });
  } catch (error) {
    console.error("Error fetching record:", error);

    const status = error.status || 500;

    return NextResponse.json(
      {
        success: false,
        error:
          status === 404
            ? "Record not found"
            : "Failed to fetch record",
      },
      { status }
    );
  }
}