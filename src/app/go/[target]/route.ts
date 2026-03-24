import { goLinks, siteConfig } from "@/config/site";

type RouteContext = {
  params: Promise<{
    target: string;
  }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { target } = await params;

  const destination =
    goLinks[target as keyof typeof goLinks] ?? siteConfig.url;

  return Response.redirect(destination, 307);
}