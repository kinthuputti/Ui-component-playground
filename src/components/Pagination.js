function Pagination({ totalPages }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page) => (
        <button key={page}>{page}</button>
      ))}
    </div>
  );
}

export default Pagination;