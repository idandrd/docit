import React, { Component } from "react";

class MainForm extends Component {
  state = {
    signedAtCity: "",
    signedAtDate: "",
    leaserName: "",
    leaserIdType: "private",
    leaserId: "",
    leaserFullAddress: "",
    leasorName: "",
    leasorId: "",
    leasorFullAddress: ""
  };

  getLeaserIdType = () => {
    const type: "private" | "company" | "ngo" | "partnership" = this.state
      .leaserIdType as any;
    switch (type) {
      case "private":
        return "ת.ז.";
      case "company":
        return "ח.פ.";
      case "ngo":
        return "ע.ר.";
      case "partnership":
        return "ש.ר.";
    }
  };
  render() {
    return (
      <div className="main-form" style={{ display: "flex" }}>
        <div
          style={{
            margin: 20,
            padding: 20,
            border: "solid",
            borderRadius: 20,
            textAlign: "right",
            fontSize: 20,
            width: 400
          }}
        >
          <FormItem text="היכן נחתם החוזה (עיר/יישוב)?">
            <input
              value={this.state.signedAtCity}
              onChange={({ target }) =>
                this.setState({ signedAtCity: target.value })
              }
            />
          </FormItem>
          <FormItem text="יום החתימה על ההסכם:">
            <input
              type="date"
              onChange={({ target }) =>
                this.setState({ signedAtDate: target.value })
              }
            />
          </FormItem>
          <FormItem text="שם המשכיר:">
            <input
              value={this.state.leaserName}
              onChange={({ target }) =>
                this.setState({ leaserName: target.value })
              }
            />
          </FormItem>
          <FormItem text="סוג זיהוי המשכיר:">
            <select
              style={{ width: 132 }}
              value={this.state.leaserIdType}
              onChange={({ target }) =>
                this.setState({ leaserIdType: target.value })
              }
            >
              <option value="private">אדם פרטי</option>
              <option value="company">חברה</option>
              <option value="ngo">עמותה</option>
              <option value="partnership">שותפות רשומה</option>
            </select>
          </FormItem>
          <FormItem text="מספר הזיהוי (משכיר):">
            <input
              value={this.state.leaserId}
              onChange={({ target }) =>
                this.setState({ leaserId: target.value })
              }
            />
          </FormItem>
          <FormItem text="כתובת מלאה (משכיר):">
            <input
              value={this.state.leaserFullAddress}
              onChange={({ target }) =>
                this.setState({ leaserFullAddress: target.value })
              }
            />
          </FormItem>
          <FormItem text="שם השוכר:">
            <input
              value={this.state.leasorName}
              onChange={({ target }) =>
                this.setState({ leasorName: target.value })
              }
            />
          </FormItem>
          <FormItem text="מספר הזיהוי (השוכר):">
            <input
              value={this.state.leasorId}
              onChange={({ target }) =>
                this.setState({ leasorId: target.value })
              }
            />
          </FormItem>
          <FormItem text="כתובת מלאה (השוכר):">
            <input
              value={this.state.leasorFullAddress}
              onChange={({ target }) =>
                this.setState({ leasorFullAddress: target.value })
              }
            />
          </FormItem>
        </div>
        <div
          style={{
            margin: 20,
            padding: 20,
            width: 700,
            textAlign: "right",
            fontSize: 16,
            border: "solid",
            borderColor: "black",
            backgroundColor: "white",
            borderRadius: 20,
            color: "black"
          }}
        >
          <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
            הסכם שכירות בלתי מוגנת
          </h2>
          <p style={{ textAlign: "center" }}>{`חוזה שנערך ונחתם ב${this.state
            .signedAtCity || "________________________"} בתאריך ${
            this.state.signedAtDate
          }`}</p>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 100, fontWeight: "bold" }}>בין</p>
            <div style={{ flex: 1 }}>
              <p>
                {`${this.state.leaserName} ${this.getLeaserIdType()} ${this
                  .state.leaserId || "________________________"}`}
              </p>
              <p>{`מ${this.state.leaserFullAddress ||
                " __________________________"}`}</p>
              <p>
                (להלן "<b>המשכיר</b>")
              </p>
              <p style={{ textDecoration: "underline", textAlign: "left" }}>
                מצד אחד
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 100, fontWeight: "bold" }}>לבין</p>
            <div style={{ flex: 1 }}>
              <p>
                {`${this.state.leasorName} ת.ז. ${this.state.leasorId ||
                  "________________________"}`}
              </p>
              <p>{`מ${this.state.leasorFullAddress ||
                " __________________________"}`}</p>
              <p>
                (להלן "<b>השוכר</b>")
              </p>
              <p style={{ textDecoration: "underline", textAlign: "left" }}>
                מצד שני
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const FormItem = (props: { text: string; children: any }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 10
    }}
  >
    <div>{props.text}</div>
    {props.children}
  </div>
);

export default MainForm;
