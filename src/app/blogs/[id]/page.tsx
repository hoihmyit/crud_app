"use client";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";
// import useSWR from "swr";
import useSWR, { Fetcher } from "swr";
const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json()); //gợi ý cái blog cho mình

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="my-3">
        <Link href={"/blogs"}> Go back</Link>
      </div>
      <Card className="text-center">
        <Card.Header>Title: {data?.title}</Card.Header>
        <Card.Body>
          <Card.Text>Content: {data?.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Author {data?.author}</Card.Footer>
      </Card>
    </div>
  );
};

export default ViewDetailBlog;
