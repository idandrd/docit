import React, { Component } from "react";
import { saveAs } from "file-saver";

function export2Doc(elementId: string, filename = "") {
  const elemant = document.getElementById(elementId);
  const innerHTML = elemant ? elemant.innerHTML : "<div>:(</div>";

  var preHtml =
    "<html dir='rtl' xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
  var postHtml = "</body></html>";
  var html = preHtml + innerHTML + postHtml;

  var blob = new Blob(["\ufeff", html], {
    type: "application/msword"
  });

  // Specify link url
  var url =
    "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);

  // Specify file name
  filename = filename ? filename + ".doc" : "document.doc";

  saveAs(blob, filename);
}

export class SaveFile extends Component<{ elementId: string }> {
  render() {
    const fileName = "הסכם שכירות בלתי מוגנת";
    return (
      <div style={{display: "flex", justifyContent: "center", marginTop: 50}}>
        <button
          style={{
            backgroundColor: "#F3A8E4",
            borderColor: "#F3A8E4",
            fontWeight: 900,
            borderRadius: 20,
            padding: 10,
            fontSize: 20,
            cursor: "pointer",
            width: 300
          }}
          onClick={() => export2Doc("someRandomId", fileName)}
        >
          שמור מסמך
        </button>
      </div>
    );
  }
}
