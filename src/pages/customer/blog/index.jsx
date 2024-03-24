import React from "react";

import BlogView from "./view";

const BlogPage = () => {
  const onSearch = (val) => {
    console.log(val);
  }
  return <BlogView onSearch={onSearch} />;
};
export default BlogPage;
