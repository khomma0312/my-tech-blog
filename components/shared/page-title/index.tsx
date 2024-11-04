const PageTitle = ({ children }: { children: string | string[] }) => {
  return (
    <h1 className="text-center text-3xl md:text-4xl font-bold py-8">
      {children}
    </h1>
  );
};

export default PageTitle;
