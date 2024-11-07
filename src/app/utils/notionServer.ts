import { Client } from "@notionhq/client";
export const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const getDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [{ property: "Created", direction: "ascending" }],
    filter: { property: "Public", checkbox: { equals: true } },
  });

  return response.results;
};

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({ block_id: blockId });
  return response.results;
};

export const getBlock = async (blockId: string) => {
  const response = await notion.blocks.retrieve({ block_id: blockId });
  return response;
};

export const searchNotion = async (query: string) => {
  const response = await notion.search({
    query: query,
    sort: {
      direction: "ascending",
      timestamp: "last_edited_time",
    },
  });
  return response.results;
};
