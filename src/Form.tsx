import React, { Component } from "react";
import { SaveFile } from "./SaveFile";
import {
  Link,
  Element,
  Events,
  scrollSpy,
  scroller,
  animateScroll
} from "react-scroll";
import { Tabs, Input, Button, Icon } from "antd";
const TabPane = Tabs.TabPane;

class MainForm extends Component {
  state = {
    currentTab: "-1",
    show: false,
    show1: false,
    show2: false,
    showOptionpPriod: false,
    OptionPeriod: "",
    signedAtCity: "",
    signedAtDate: "",
    lessorName: "",
    lessorIdType: "private",
    lessorId: "",
    lessorFullAddress: "",
    lesseeName: "",
    lesseeId: "",
    lesseeFullAddress: "",
    showadditionallessee: "",
    lesseeName1: "",
    lesseeId1: "",
    roomnuber: "",
    floornumber: "",
    apartmentaddress: "",
    EntranceDate: "",
    LeaveDate: "",
    OptionPeriodDay: "",
    AdditionalSection1: "",
    AdditionalSection2: "",
    monthlypayment: "",
    paymentday: "",
    paymentmethodo: "",
    showerace1: false,
    erace1: true,
    showerace2: ""
  };

  contractElementId = "someRandomId";

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

  getpaymentday = () => {
    const type: "1th" | "10th" | "15th" | "otherth" = this.state
      .paymentday as any;
    switch (type) {
      case "1th":
        return "1";
      case "10th":
        return "10";
      case "15th":
        return "15";
      case "otherth":
        return "_____";
    }
  };

  getpaymentmethodo = () => {
    const type: "on" | "off" | "ngo" | "partnership" = this.state
      .paymentmethodo as any;
    switch (type) {
      case "on":
        return "kkkk";
      case "off":
        return "";
    }
  };

  handleTabChange = (tabKey: string) => {
    this.setState({ currentTab: tabKey });
    scroller.scrollTo(`section${tabKey}`, {
      duration: 1000,
      smooth: true,
      containerId: this.contractElementId,
      offset: -30
    });
  };

  render() {
    return (
      <div className="main-form" style={{ display: "flex" }}>
        <div
          style={{
            margin: 20,
            padding: 20,
            paddingRight: 0,
            border: "solid",
            borderRadius: 20,
            textAlign: "right",
            fontSize: 20,
            width: 600,
            height: 700,
            backgroundColor: "#666666"
          }}
        >
        
          <Tabs
            tabPosition="right"
            activeKey={this.state.currentTab}
            onChange={this.handleTabChange}
          >
          <TabPane tab=" הנחיות" key="-1">
          <h1 style={{ textAlign: "center" }}>
            {`ברוכים הבאים למחולל הסכמי השכירות הבלתי מוגנים `}
          </h1>
          <p style={{ textAlign: "right" }}>
            {`הכנת הסכם שכירות בלתי מוגן, קל מתמיד, המרכיבים ליצור את הסכם השכירות הבלתי מוגן כבר נמצאים כאן(!) כל שעליכם לעשות זה לענות על כמה שאלות פשוטות, לבחור איזה סעיפים יכנסו לחוזה ואיזה לא ובום יש לכם חהסכם שכירות סטנדרטי מתואם במיוחד בשבילכם `}
          </p>
          <p style={{ textAlign: "right" }}>
            {`*אגב בצד שמאל אתם יכולים לראות את ההסכם שלכם `}
          </p>
          <div style={{ display: "flex", justifyContent: "center"}}>
              <Button type="primary" 
              style={{ width: 300 }}
              size="large"
              onClick={() => this.handleTabChange("0")}>
                חולל:)
              </Button>
          </div>
          </TabPane>
            <TabPane tab="הרחבות חוזה" key="0" style={{  justifyContent: "center", alignContent: "center"}}>
            <div style={{ display: "flex", justifyContent: "center"}}>
            <img src="animals.png" alt="Italian Trulli" style={{ display: "flex", width: 200, height: 145, border: "solid",
            borderRadius: 20, color: "white", margin: 5}}></img>
            <img src="partners.png" alt="Italian Trulli" style={{ display: "flex", width: 200, height: 145, border: "solid",
            borderRadius: 20, color: "white", margin: 5}}></img>
            </div>
            <div style={{ display: "flex", justifyContent: "center"}}>
            <img src="smoking.png" alt="Italian Trulli" style={{ display: "flex", width: 200, height: 145, border: "solid",
            borderRadius: 20, color: "white", margin: 5}}></img>
            <Button 
            
            onClick={() =>  this.setState({ showOptionpPriod: !this.state.showOptionpPriod })}  style={{ justifyContent: "center", width: 200, height: 145, border: "solid",
            borderRadius: 20, color: "white", margin: 5,} }>
            <img src="option-period.png" alt="Italian Trulli" style={{width: 150, height: 135, color: "white"}}></img>
            </Button>
            </div>
            <div style={{ display: "flex", justifyContent: "center"}}>
            <img src="yard.png" alt="Italian Trulli" style={{ display: "flex", width: 200, height: 145, border: "solid",
            borderRadius: 20, color: "white", margin: 5}}></img>
            <img src="pool.png" alt="Italian Trulli" style={{ display: "flex", width: 200, height: 145, border: "solid",
            borderRadius: 20, color: "white", margin: 5}}></img>
            </div>
            <div style={{ display: "flex", justifyContent: "center"}}>
            <img src="insurance.png" alt="Italian Trulli" style={{ display: "flex", width: 200, height: 145, border: "solid",
            borderRadius: 20, color: "white", margin: 5}}></img>
            </div>
            <div style={{ display: "flex", justifyContent: "center"}}>
            <Button type="primary" onClick={() => this.handleTabChange("-1")} style={{ justifyContent: "center"}}>
                <Icon type="right" />
                הקודם
              </Button>
              <Button type="primary" onClick={() => this.handleTabChange("1")}>
                הבא
                <Icon type="left" />
              </Button>
              </div>
            </TabPane>
            <TabPane tab="פרטי הצדדים לעסקה " key="1">
              <FormItem text="היכן נחתם החוזה (עיר/יישוב)?">
                <Input
                  value={this.state.signedAtCity}
                  onChange={({ target }) =>
                    this.setState({ signedAtCity: target.value })
                  }
                />
              </FormItem>
              <FormItem text="יום החתימה על ההסכם:">
                <Input
                  type="date"
                  onChange={({ target }) =>
                    this.setState({ signedAtDate: target.value })
                  }
                />
              </FormItem>
              <FormItem text="שם המשכיר:">
                <Input
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
                <Input
                  value={this.state.lessorId}
                  onChange={({ target }) =>
                    this.setState({ lessorId: target.value })
                  }
                />
              </FormItem>
              <FormItem text="כתובת מלאה (משכיר):">
                <Input
                  value={this.state.lessorFullAddress}
                  onChange={({ target }) =>
                    this.setState({ lessorFullAddress: target.value })
                  }
                />
              </FormItem>
              <FormItem text="שם השוכר:">
                <Input
                  value={this.state.lesseeName}
                  onChange={({ target }) =>
                    this.setState({ lesseeName: target.value })
                  }
                />
              </FormItem>
              <FormItem text="מספר הזיהוי (השוכר):">
                <Input
                  value={this.state.lesseeId}
                  onChange={({ target }) =>
                    this.setState({ lesseeId: target.value })
                  }
                />
              </FormItem>
              <FormItem text="כתובת מלאה (השוכר):">
                <Input
                  value={this.state.lesseeFullAddress}
                  onChange={({ target }) =>
                    this.setState({ lesseeFullAddress: target.value })
                  }
                />
              </FormItem>
              <FormItem text="כמה חדרים יש במושכר?">
                <Input
                  value={this.state.roomnuber}
                  onChange={({ target }) =>
                    this.setState({ roomnuber: target.value })
                  }
                />
              </FormItem>
              <FormItem text="באיזה קומה המושכר?">
                <Input
                  value={this.state.floornumber}
                  onChange={({ target }) =>
                    this.setState({ floornumber: target.value })
                  }
                />
              </FormItem>
              <FormItem text="מהי כתובת הדירה המושכרת?">
                <Input
                  value={this.state.apartmentaddress}
                  onChange={({ target }) =>
                    this.setState({ apartmentaddress: target.value })
                  }
                />
              </FormItem>
              <FormItem text="מועד מסירת החזקה בדירה לשוכר (יום כניסת השוכר לדירה)?">
                <Input
                  type="date"
                  onChange={({ target }) =>
                    this.setState({ EntranceDate: target.value })
                  }
                />
              </FormItem>
              <FormItem text="מועד סיום תקופת השכירות  (יום פינוי המושכר  על ידי השוכר)">
                <Input
                  type="date"
                  onChange={({ target }) =>
                    this.setState({ LeaveDate: target.value })
                  }
                />
              </FormItem>

              <Button disabled>
                <Icon type="right" />
                הקודם
              </Button>
              <Button type="primary" onClick={() => this.handleTabChange("2")}>
                הבא
                <Icon type="left" />
              </Button>
            </TabPane>
            {this.state.showOptionpPriod && (
            <TabPane tab=" תקותאופציה" key="2">
              <FormItem text="באיזה יום בחודש ידרש השוכר לשלם את שכר הדירה / התמורה?">
                <select
                  style={{ width: 132 }}
                  value={this.state.OptionPeriodDay}
                  onChange={({ target }) =>
                    this.setState({ OptionPeriodDay: target.value })
                  }
                >
                  <option value="15 ימים">15 ימים</option>
                  <option value="חודש"> חודש</option>
                  <option value="חודשיים">חודשיים</option>
                  <option value="שלושה חודשים">שלושה חודשים</option>
                </select>
              </FormItem>
              <FormItem text=" מהי תקופת האופציה הניתנת לשוכר(בחודשים): ">
                <Input
                  value={this.state.OptionPeriod}
                  onChange={({ target }) =>
                    this.setState({ OptionPeriod: target.value })
                  }
                />
              </FormItem>
            </TabPane>
            )}
            <TabPane tab="בעלי חיים" key="3">
              <FormItem text="1הוסף סעיף">
                <Input
                  value={this.state.AdditionalSection1}
                  onChange={({ target }) =>
                    this.setState({ AdditionalSection1: target.value })
                  }
                />
              </FormItem>
              <FormItem text="2הוסף סעיף">
                <Input
                  value={this.state.AdditionalSection2}
                  onChange={({ target }) =>
                    this.setState({ AdditionalSection2: target.value })
                  }
                />
              </FormItem>
              <FormItem text="מהו גובה שכר הדירה החודשי הנדרש?">
                <Input
                  value={this.state.monthlypayment}
                  onChange={({ target }) =>
                    this.setState({ monthlypayment: target.value })
                  }
                />
              </FormItem>
              <FormItem text="באיזה יום בחודש ידרש השוכר לשלם את שכר הדירה / התמורה?">
                <select
                  style={{ width: 132 }}
                  value={this.state.paymentday}
                  onChange={({ target }) =>
                    this.setState({ paymentday: target.value })
                  }
                >
                  <option value="1th">ב1 לחודש</option>
                  <option value="10th"> ב10 לחודש</option>
                  <option value="15th">ב15 לחודש</option>
                  <option value="otherth">אחר(ידנית)</option>
                </select>
              </FormItem>
              <FormItem text="יום החתימה על ההסכם:">
                <input
                  type="checkbox"
                  onChange={() => this.setState({ show: !this.state.show })}
                />
              </FormItem>
              {this.state.show && (
                <FormItem text="I'm here!!!">
                  <input
                    type="checkbox"
                    onChange={() => this.setState({ show: !this.state.show })}
                  />
                </FormItem>
              )}
              <SaveFile elementId={this.contractElementId} />
            </TabPane>
            <TabPane tab="חצר" key="4">
              Idan
            </TabPane>
          </Tabs>
        </div>
        <div
          id={this.contractElementId}
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
            color: "black",
            overflow: "scroll",
            height: 700
          }}
        >
          <Element name="section1">
            <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
              הסכם שכירות בלתי מוגנת
            </h1>
          </Element>
          <p style={{ textAlign: "center" }}>
            {`חוזה שנערך ונחתם ב${this.state.signedAtCity ||
              "______________"} בתאריך ${this.state.signedAtDate ||
              "_____________"}`}
          </p>

          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 70, fontWeight: "bold" }}>בין</p>

            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: "bold" }}>
                {`${this.state.lessorName} ${this.getlessorIdType()} ${this
                  .state.lessorId || "________________________"}`}
              </p>
              <p style={{ marginTop: -10 }}>{`מ${this.state.lessorFullAddress ||
                " __________________________"}`}</p>
              <p style={{ marginTop: -10 }}>
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
              <p style={{ fontWeight: "bold" }}>
                {`${this.state.lesseeName} ת.ז. ${this.state.lesseeId ||
                  "________________________"}`}
              </p>
              {this.state.showadditionallessee && (
                <p style={{ fontWeight: "bold" }}>
                  {`${this.state.lesseeName1} ת.ז. ${this.state.lesseeId1 ||
                    "________________________"}`}
                </p>
              )}
              <p style={{ marginTop: -10 }}>{`מ${this.state.lesseeFullAddress ||
                " __________________________"}`}</p>
              <p style={{ marginTop: -10 }}>
                ( להלן {this.state.showadditionallessee && "ביחד ולחוד"} "
                <b>השוכר</b>")
              </p>
              <p style={{ textDecoration: "underline", textAlign: "left" }}>
                מצד שני
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 20 }}>הואיל:</p>
            <div style={{ flex: 1 }}>
              <p style={{ textAlign: "justify" }}>
                {`והמשכיר הוא בעל הזכויות והמחזיק הבלעדי של דירה בת  ${this
                  .state.roomnuber || "___"} חדרים, בקומה  ${this.state
                  .floornumber || "___"}  הנמצאת ב${this.state
                  .apartmentaddress ||
                  "__________________________"} וכן מיטלטלין כאמור ברשימה המצ"ב כנספח א' 
                  `}
                (להלן "<b>המושכר</b>");
              </p>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: -25 }}>
            <p style={{ marginLeft: 20 }}>והואיל:</p>
            <div style={{ flex: 1 }}>
              <p>{`  ולשוכר ידוע כי ביום תחילתו של חוק הגנת הדייר (נוסח משולב), התשל"ב-1972 ו/או ביום${this
                .state.signedAtDate ||
                "___"} ולאחר מכן היה המושכר פנוי ולא היה דייר שהיה זכאי להחזיק בו, וכי לא יחולו ביחס למושכר הוראות חוק הגנת הדייר ו/או כל הוראות הבאות להגביל את השכירות;
                `}</p>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: -25 }}>
            <p style={{ marginLeft: 20 }}>והואיל:</p>
            <div style={{ flex: 1 }}>
              <p>{`  והמשכיר מעוניין להשכיר לשוכר את המושכר בשכירות בלתי מוגנת, והשוכר מעוניין לשכור מהמשכיר את המושכר בשכירות בלתי מוגנת, והכל בכפוף לתנאי הסכם זה;
              `}</p>
            </div>
          </div>

          <ol>
            <p
              style={{ textAlign: "center", fontWeight: "bold" }}
            >{`ולפיכך הוסכם והותנה בין הצדדים כדלקמן:`}</p>
            <Element name="section2">
              <h3
                style={{
                  marginRight: -30,
                  textDecoration: "underline"
                }}
              >
                מבוא
              </h3>
            </Element>
            <div style={{ display: "flex" }}>
              {this.state.erace1 && (
                <li
                  onMouseOver={() =>
                    this.setState({ showerace1: !this.state.showerace1 })
                  }
                >
                  {`המבוא להסכם זה מהווה חלק בלתי נפרד הימנו. אין לפרש הוראה מהוראותיו בניגוד למשמעות הטבעית והרגילה של מילות הסכם זה.`}
                </li>
              )}
              {this.state.erace1 && (
                <p
                  onClick={() => this.setState({ erace1: !this.state.erace1 })}
                >
                  {this.state.showerace1 && "X"}
                </p>
              )}
            </div>
            <h3
              style={{
                marginRight: -30,
                textDecoration: "underline"
              }}
            >
              תקופת השכירות
            </h3>
            <li style={{ textAlign: "justify" }}>
              {`המשכיר משכיר בזאת את המושכר בשכירות בלתי מוגנת לשוכר, והשוכר שוכר בזאת את המושכר בשכירות בלתי מוגנת לתקופה בת(יציג את התאריך בין 2 התאריכים שהוזנו) חודשים החל מיום ${this
                .state.EntranceDate || "____________"} ועד יום ${this.state
                .LeaveDate || "____________"} `}{" "}
              (להלן: "<b>תקופת השכירות</b>").
            </li>
            {this.state.showOptionpPriod && (
              <li style={{ textAlign: "justify" }}>
              {`היה והשוכר החליט כי ברצונו להאריך את תקופת השכירות, והמשכיר הסכים על ההארכה בהודעה בכתב עד ${this
                .state.OptionPeriodDay || "____________"} , תקופה זו תעמוד על ${this.state
                .OptionPeriod || "____________"} `}{" "}
              (להלן: "<b>תקופת האופציה</b>").
              </li>
            )}
            {this.state.show1 && (
              <li style={{ textAlign: "justify" }}>
                {this.state.AdditionalSection1}
              </li>
            )}
            <h3
              style={{
                marginRight: -30,
                textDecoration: "underline"
              }}
            >
              הצהרות השוכר
            </h3>
            <li>
              {` השוכר מצהיר בזאת כי ידוע לו והוא מסכים לקבל את המושכר בשכירות בלתי מוגנת, וזאת בכפוף לאמור להלן: `}
              <ol type="i">
                <li>
                  {` השוכר אינו ולא יהיה דייר מוגן לפי חוק הגנת הדייר (נוסח משולב), התשל"ב-1972 ולא לפי כל חוק או דין אחר; לא תחול עליו כל הגנה מכל סוג ומין שהוא וכל הגנה מההגנות הקנויות לדייר מוגן.  `}
                </li>
                <li>
                  {`השוכר לא שילם כל דמי מפתח שהם בתמורה לזכות השכירות במושכר ו/או כל תוספת אחרת למעט דמי השכירות הנקובים בהסכם זה.  `}
                </li>
              </ol>
            </li>
            <li style={{ textAlign: "justify" }}>
              {`השוכר מצהיר כי הוא בדק את המושכר ומצא אותו תקין ובמצב המתאים לצרכי מגוריו בו, וזאת לשביעות רצונו. השוכר מוותר בזאת על כל טענה או תביעה שתהיה לו, אם תהיה, ביחס לאי התאמה במושכר. `}
            </li>
            {this.state.show2 && (
              <li style={{ textAlign: "justify" }}>
                {this.state.AdditionalSection2}
              </li>
            )}
            <h3
              style={{
                marginRight: -30,
                textDecoration: "underline"
              }}
            >
              התמורה
            </h3>
            <li style={{ textAlign: "justify" }}>
              בתמורה לקבלת זכות השכירות במושכר, השוכר מתחייב לשלם לידי המשכיר סך
              של {this.state.monthlypayment || "____________"} מדי ה-{" "}
              {this.getpaymentday() || "_____"} לחודש.
            </li>
          </ol>
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
    <div style={{ width: 400 }}>{props.text}</div>
    <div style={{ width: 400 }}>{props.children}</div>
  </div>
);

const FormItem2 = (props: { text: string; children: any }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 0,
      margin: 10,
      marginRight: 40,
      padding: 20,
      fontSize: 10,
      width: 50
    }}
  >
    <div>{props.text}</div>
    {props.children}
  </div>
);

export default MainForm;
