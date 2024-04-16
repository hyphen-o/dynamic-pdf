import { ContainerPdf } from "@/components/container";
import { usePdf } from "@/hooks";

const Index = () => {
  const { targetRef, generatePdf } = usePdf();

  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
        ref={targetRef}
      >
        <ContainerPdf>
          <h1>sample dynamic-PDF </h1>
          <p>This is sample for generating PDF!</p>
        </ContainerPdf>
        <ContainerPdf>
          <p>This is page 2</p>
        </ContainerPdf>
      </div>
      <button
        onClick={generatePdf}
        style={{
          width: "200px",
          height: "50px",
        }}
      >
        generate pdf
      </button>
    </div>
  );
};

export default Index;
