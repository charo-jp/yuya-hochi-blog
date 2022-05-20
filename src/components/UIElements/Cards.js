import React from "react";

import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import getTags from "../../utils/getTags";
import getDate from "../../utils/getDate";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { CardActionArea } from "@mui/material";

import slugify from "slugify";

import "./Cards.scss";

const Cards = ({ articles = [], content }) => {
  // In order to use Cards component, the following fields are
  // required
  // title, createdAt, image, id, tags
  return (
    <div className="articles-list">
      {articles.map((item) => {
        const { title, createdAt, image, id } = item;
        const tags = getTags(item.metadata.tags);
        const pathToImage = getImage(image);
        const createdTime = getDate(createdAt);
        const slug = slugify(title, { lower: true, remove: /[.\?]/ });
        return (
          <Card key={id}>
            <Stack className="tag-stack" direction="row" spacing={1}>
              {tags.map((tag, index) => {
                return (
                  <Chip
                    key={index}
                    label={tag}
                    component={Link}
                    to={`/${content}/tags/${tag}`}
                    clickable
                    color="primary"
                    size="small"
                  />
                );
              })}
            </Stack>
            <CardActionArea component={Link} to={`/${content}/${slug}`}>
              <CardMedia>
                <GatsbyImage
                  image={pathToImage}
                  alt={title}
                  className="card-image"
                />
              </CardMedia>
              <CardContent>
                <div className="card-info">
                  <p className="date">{createdTime}</p>
                </div>
                <h2 className="card-title">{title}</h2>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
};

export default Cards;
