import { useRef } from "react";
import { toJpeg } from "html-to-image";
import jsPDF from "jspdf";

export const usePdf = () => {
	const targetRef = useRef<HTMLDivElement>(null);

	//PDF生成
	const generatePdf = async () => {
    if(!targetRef.current) return
    
		const pdf = new jsPDF("p", "px", [595, 842]);

		//PDFの高さと横幅を取得
		const width = pdf.internal.pageSize.getWidth();
		const height = pdf.internal.pageSize.getHeight();
    
    //ページごとのElementを配列に格納
		const childElements = Array.from(targetRef.current.children);

		//ページごとにPDF生成
		for (const childElement of childElements) {
			const dataUrl = await toJpeg(childElement as HTMLElement, { backgroundColor: "white" });
			pdf.addImage(dataUrl, "PNG", 0, 0, width, height);
			pdf.addPage();
		}

		//最後の白紙ページを削除
		pdf.deletePage(pdf.getNumberOfPages());

		//Blobオブジェクトを生成
		const pdfBytes = pdf.output("arraybuffer");
		const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

		//URLを生成
		const fileUrl = URL.createObjectURL(pdfBlob);
		window.open(fileUrl);
	};

	return { targetRef, generatePdf };
};
