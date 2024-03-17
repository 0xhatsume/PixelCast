import { NextApiRequest, NextApiResponse } from "next";
import { BASE_URL } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "POST") {
    const signedMessage = req.body as {
      untrustedData: {
        fid: number;
        url: string;
        messageHash: string;
        timestamp: number;
        network: number;
        buttonIndex: number;
        castId: { fid: number; hash: string };
      };
      trustedData?: {
        messageBytes: string;
      };
    };
    const buttonIndex = signedMessage?.untrustedData?.buttonIndex as number;

    if (buttonIndex === 1){
      const messageBytes = signedMessage?.trustedData?.messageBytes;
      res.redirect(302, `${BASE_URL}/verify/${messageBytes}`);
    } else {
      return new NextResponse(`<!DOCTYPE html><html><head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://jade-doubtful-hippopotamus-568.mypinata.cloud/ipfs/QmYU1StXRTHJG9GsX83sB2K6VQ1gsjdnpbPgrzHViBShyx" />
        <meta property="fc:frame:button:1" content="directionszzz" />
        <meta property="fc:frame:post_url" content="${BASE_URL}/api/play" />
        </head></html>`);
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
