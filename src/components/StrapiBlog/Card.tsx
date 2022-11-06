import React from "react";
import Link from "next/link";
import { Image as NextImage } from "./Image";

export const Card = ({ article }: any) => {
  return (
    <Link href={`/strapi/article/${article.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={article.attributes.image} />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.attributes.category.data.attributes.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.attributes.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};