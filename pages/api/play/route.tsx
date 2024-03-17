import { BASE_URL } from "@/utils";
import { FrameRequest, getFrameMessage } from "@coinbase/onchainkit";
import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
	//let accountAddress: string | undefined = "";
	const body: FrameRequest = await req.json();
	const { isValid, message } = await getFrameMessage(body);
    isValid? console.log("isValid") : console.log("isNotValid");
    console.log(message)
	// if (isValid) {
	// 	try {
	// 		accountAddress = await getFrameAccountAddress(message, { NEYNAR_API_KEY: "NEYNAR_API_DOCS" });
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// }

	return new NextResponse(`<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://jade-doubtful-hippopotamus-568.mypinata.cloud/ipfs/QmYU1StXRTHJG9GsX83sB2K6VQ1gsjdnpbPgrzHViBShyx" />
    <meta property="fc:frame:button" content="directionszzz" />
    </head>
    PixeLaw for Da Wins!
    </html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
	return getResponse(req);
}

export const dynamic = "force-dynamic";