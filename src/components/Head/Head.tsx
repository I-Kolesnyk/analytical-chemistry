import Head from "next/head";
import { FC } from "react";

import { PageHeadProps } from "@/types";

const PageHead: FC<PageHeadProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};

export default PageHead;
