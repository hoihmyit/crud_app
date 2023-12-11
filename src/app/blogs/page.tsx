"use client";
import Table from "../../component/app.table";
import useSWR from "swr";
const blogs = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://652c0736d0d1df5273ef0e4e.mockapi.io/api/v1/blogs",
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
    <div className="mt-3">
      <Table
        blogs={data?.sort((a: any, b: any) => b.id - a.id) ?? []} //truyên qua biến blog, dùng ? để khi data bị undefine thì sẽ không bị lỗi
      />
    </div>
  );
};

export default blogs;
