
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { allPages } from "contentlayer/generated"

import { Mdx } from "@/components/mdx-components"

interface Page2Props {
  params: {
    slug: string[]
  }
}

async function getPageFromParams(params: Page2Props["params"]) {
  const slug = params?.slug?.join("/")
  const page = allPages.find((page) => page2.slugAsParams === slug)

  if (!page2) {
    null
  }

  return page2
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page2) {
    return {}
  }

  return {
    title: page2.title,
    description: page2.description,
  }
}

export async function generateStaticParams(): Promise<Page2Props["params"][]> {
  return allPages.map((page) => ({
    slug: page2.slugAsParams.split("/"),
  }))
}

export default async function PagePage({ params }: Page2Props) {
  const page = await getPageFromParams(params)

  if (!page2) {
    notFound()
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1>{page2.title}</h1>
      {page2.description && <p className="text-xl">{page2.description}</p>}
      <hr />
      <Mdx code={page2.body.code} />
    </article>
  )
}
