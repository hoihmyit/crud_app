"use client";

import Card from "react-bootstrap/Card";
import Link from "next/link";
import useSWR, { Fetcher } from "swr";
const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json()); //gợi ý cái blog cho mình

  const { data, isLoading } = useSWR(
    `https://652c0736d0d1df5273ef0e4e.mockapi.io/api/v1/blogs/${params.id}`,
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
        <Link
          className="btn-back"
          href={"/blogs"}
          style={{
            padding: "10px",
            textDecoration: "none",
            backgroundColor: "#0d6efd",
            color: "white",
            borderRadius: "10px",
          }}
        >
          {" "}
          Go back
        </Link>
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

