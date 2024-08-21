type ProjectPageProps = {
  link: string;
  name: string;
};

export function ProjectPage({ name, link }: ProjectPageProps) {
  return (
    <>
      <iframe
        src={link}
        title={name}
        style={{
          width: "100%",
          height: "calc(100dvh - 64px)",
          border: "none",
          marginBottom: -10,
        }}
      >
        Your browser does not support iframes. Please try another browser or
        update your browser.
      </iframe>
    </>
  );
}
