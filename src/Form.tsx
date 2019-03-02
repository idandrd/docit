import React, { Component } from "react";

class MainForm extends Component {
  state = {
    signedAtCity: "",
    signedAtDate: "",
    lessorName: "",
    lessorIdType: "private",
    lessorId: "",
    lessorFullAddress: "",
    lesseeName: "",
    lesseeId: "",
    lesseeFullAddress: "",
    roomnuber: "",
    floornumber: "",
    apartmentaddress: "",
    EntranceDate: "",
    LeaveDate: ""
  };

  getlessorIdType = () => {
    const type: "private" | "company" | "ngo" | "partnership" = this.state
      .lessorIdType as any;
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
              value={this.state.lessorName}
              onChange={({ target }) =>
                this.setState({ lessorName: target.value })
              }
            />
          </FormItem>
          <FormItem text="סוג זיהוי המשכיר:">
            <select
              style={{ width: 132 }}
              value={this.state.lessorIdType}
              onChange={({ target }) =>
                this.setState({ lessorIdType: target.value })
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
              value={this.state.lessorId}
              onChange={({ target }) =>
                this.setState({ lessorId: target.value })
              }
            />
          </FormItem>
          <FormItem text="כתובת מלאה (משכיר):">
            <input
              value={this.state.lessorFullAddress}
              onChange={({ target }) =>
                this.setState({ lessorFullAddress: target.value })
              }
            />
          </FormItem>
          <FormItem text="שם השוכר:">
            <input
              value={this.state.lesseeName}
              onChange={({ target }) =>
                this.setState({ lesseeName: target.value })
              }
            />
          </FormItem>
          <FormItem text="מספר הזיהוי (השוכר):">
            <input
              value={this.state.lesseeId}
              onChange={({ target }) =>
                this.setState({ lesseeId: target.value })
              }
            />
          </FormItem>
          <FormItem text="כתובת מלאה (השוכר):">
            <input
              value={this.state.lesseeFullAddress}
              onChange={({ target }) =>
                this.setState({ lesseeFullAddress: target.value })
              }
            />
          </FormItem>
          <FormItem text="כמה חדרים יש במושכר?">
            <input
              value={this.state.roomnuber}
              onChange={({ target }) =>
                this.setState({ roomnuber: target.value })
              }
            />
          </FormItem>
          <FormItem text="באיזה קומה המושכר?">
            <input
              value={this.state.floornumber}
              onChange={({ target }) =>
                this.setState({ floornumber: target.value })
              }
            />
          </FormItem>
          <FormItem text="מהי כתובת הדירה המושכרת?">
            <input
              value={this.state.apartmentaddress}
              onChange={({ target }) =>
                this.setState({ apartmentaddress: target.value })
              }
            />
          </FormItem>
          <FormItem text="מועד מסירת החזקה בדירה לשוכר (יום כניסת השוכר לדירה)?">
            <input
              type="date"
              onChange={({ target }) =>
                this.setState({ EntranceDate: target.value })
              }
            />
          </FormItem>
          <FormItem text="מועד סיום תקופת השכירות  (יום פינוי המושכר  על ידי השוכר)">
            <input
              type="date"
              onChange={({ target }) =>
                this.setState({ LeaveDate: target.value })
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
            .signedAtCity || "______________"} בתאריך ${
            this.state.signedAtDate || "_____________"
          }`}</p>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 70, fontWeight: "bold" }}>בין</p>
            <div style={{ flex: 1 }}>
              <p>
                {`${this.state.lessorName} ${this.getlessorIdType()} ${this
                  .state.lessorId || "________________________"}`}
              </p>
              <p>{`מ${this.state.lessorFullAddress ||
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
            <p style={{ marginLeft: 70, fontWeight: "bold" }}>לבין</p>
            <div style={{ flex: 1 }}>
              <p>
                {`${this.state.lesseeName} ת.ז. ${this.state.lesseeId ||
                  "________________________"}`}
              </p>
              <p>{`מ${this.state.lesseeFullAddress ||
                " __________________________"}`}</p>
              <p>
                (להלן "<b>השוכר</b>")
              </p>
              <p style={{ textDecoration: "underline", textAlign: "left" }}>
                מצד שני
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 20 }}>הואיל:</p>
            <div style={{ flex: 1 }}>
              <p>{`  והמשכיר הוא בעל הזכויות והמחזיק הבלעדי של דירה בת${this.state.roomnuber ||
                "___"} חדרים, בקומה  ${this.state.floornumber ||
                  "___"}  הנמצאת ב${this.state.apartmentaddress ||"__________________________" } וכן מיטלטלין כאמור ברשימה המצ"ב כנספח א' 
                  `}(להלן "<b>המושכר</b>");</p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 20 }}>והואיל:</p>
            <div style={{ flex: 1 }}>
              <p>{`  ולשוכר ידוע כי ביום תחילתו של חוק הגנת הדייר (נוסח משולב), התשל"ב-1972 ו/או ביום${this.state.signedAtDate ||
                "___"} ולאחר מכן היה המושכר פנוי ולא היה דייר שהיה זכאי להחזיק בו, וכי לא יחולו ביחס למושכר הוראות חוק הגנת הדייר ו/או כל הוראות הבאות להגביל את השכירות;
                `}</p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 20 }}>והואיל:</p>
            <div style={{ flex: 1 }}>
              <p>{`  והמשכיר מעוניין להשכיר לשוכר את המושכר בשכירות בלתי מוגנת, והשוכר מעוניין לשכור מהמשכיר את המושכר בשכירות בלתי מוגנת, והכל בכפוף לתנאי הסכם זה;
              `}</p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
          <p style={{ textAlign: "center", fontWeight: "bold" }}>{`ולפיכך הוסכם והותנה בין הצדדים כדלקמן:`}</p>
          <p style={{ marginLeft: 70, fontWeight: "bold", textDecoration: "underline" }}>מבוא</p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 20}}>1.</p>
            <div style={{ flex: 1 }}>
              <p>
                {`המבוא להסכם זה מהווה חלק בלתי נפרד הימנו. אין לפרש הוראה מהוראותיו בניגוד למשמעות הטבעית והרגילה של מילות הסכם זה.`}
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 20, fontWeight: "bold", textDecoration: "underline"}}>תקופת השכירות</p>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 20}}>2.</p>
            <div style={{ flex: 1 }}>
              <p>
                {`המשכיר משכיר בזאת את המושכר בשכירות בלתי מוגנת לשוכר, והשוכר שוכר בזאת את המושכר בשכירות בלתי מוגנת לתקופה בת(יציג את התאריך בין 2 התאריכים שהוזנו) חודשים החל מיום ${
            this.state.EntranceDate ||"____________"
          } ועד יום ${
            this.state.LeaveDate ||"____________"
          } `} (להלן: "<b>המושכר</b>").
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 20, fontWeight: "bold", textDecoration: "underline"}}>הצהרות השוכר</p>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 20}}>3.</p>
            <div style={{ flex: 1 }}>
              <p>
                {` השוכר מצהיר בזאת כי ידוע לו והוא מסכים לקבל את המושכר בשכירות בלתי מוגנת, וזאת בכפוף לאמור להלן: `} 
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 40}}>3.1.</p>
            <div style={{ flex: 1 }}>
              <p>
                {` השוכר אינו ולא יהיה דייר מוגן לפי חוק הגנת הדייר (נוסח משולב), התשל"ב-1972 ולא לפי כל חוק או דין אחר; לא תחול עליו כל הגנה מכל סוג ומין שהוא וכל הגנה מההגנות הקנויות לדייר מוגן.  `} 
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 40}}>3.2.</p>
            <div style={{ flex: 1 }}>
              <p>
                {`השוכר לא שילם כל דמי מפתח שהם בתמורה לזכות השכירות במושכר ו/או כל תוספת אחרת למעט דמי השכירות הנקובים בהסכם זה.  `} 
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 20}}>4.</p>
            <div style={{ flex: 1 }}>
              <p>
                {`השוכר מצהיר כי הוא בדק את המושכר ומצא אותו תקין ובמצב המתאים לצרכי מגוריו בו, וזאת לשביעות רצונו. השוכר מוותר בזאת על כל טענה או תביעה שתהיה לו, אם תהיה, ביחס לאי התאמה במושכר. `} 
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
      marginBottom: 20
    }}
  >
    <div>{props.text}</div>
    {props.children}
  </div>
);

export default MainForm;
