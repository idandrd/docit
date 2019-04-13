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
import { Tabs, Input, Button, Icon, Radio } from "antd";
const TabPane = Tabs.TabPane;


class MainForm extends Component {
  state = {
    currentTab: "-1",
    show: false,
    show1: false,
    show2: false,
    showOptionpPriod: false,
    showchecks: "",
    showEFT: "",
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
    monthlyoptionpayment: "",
    paymentday: "",
    paymentmethodo: "",
    banknumber: "",
    brancknumber: "",
    accountnumber: "",
    delayinpayment: "",
    tax: "",
    compensation: "",
    description: "",
    hoursfix: "",
    plastering: false,
    showflaw: false,
    flaw: "",
    showerace1: false,
    insurance: false,
    pool: false,
    yard: false,
    pets: "",
    smoking: "",
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
                חולל :)
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
            <img src="smoking.png" alt="Italian Trulli" style={{ display: "flex", width: 200, height: 145,
            borderRadius: 20, color: "white", margin: 5}}></img>
            <Button 
            type="primary"
            onClick={() =>  this.setState({ showOptionpPriod: !this.state.showOptionpPriod })}  
            style={{ justifyContent: "center", width: 200, height: 145, border: "solid",
            borderRadius: 20, color: "white", margin: 5,} }>
            <img src="option-period.png" alt="Italian Trulli" style={{width: 150, height: 135, color: "white"}}></img>
            </Button>
            </div>
            <div style={{ display: "flex", justifyContent: "center"}}>
            <Button 
            type="primary"
            onClick={() =>  this.setState({ yard: !this.state.yard })}  
            style={{ justifyContent: "center", width: 200, height: 145, border: "solid",
            borderRadius: 20, color: "white", margin: 5,} }>
            <img src="yard.png" alt="Italian Trulli" style={{width: 150, height: 135, color: "white"}}></img>
            </Button>
            <Button 
            type="primary"
            onClick={() =>  this.setState({ pool: !this.state.pool })}  
            style={{ justifyContent: "center", width: 200, height: 145, border: "solid",
            borderRadius: 20, color: "white", margin: 5,} }>
            <img src="pool.png" alt="Italian Trulli" style={{width: 150, height: 135, color: "white"}}></img>
            </Button>
            </div>
            <Button 
            type="primary"
            onClick={() =>  this.setState({ insurance: !this.state.insurance })}  
            style={{ justifyContent: "center", width: 200, height: 145, border: "solid",
            borderRadius: 20, color: "white", margin: 5,} }>
            <img src="insurance.png" alt="Italian Trulli" style={{width: 150, height: 135, color: "white"}}></img>
            </Button>
            <div style={{ display: "flex", justifyContent: "center"}}>
            <Button type="primary" onClick={() => this.handleTabChange("-1")} style={{ justifyContent: "center"}}>
                <Icon type="right" />
                הקודם
              </Button>
              <Button type="primary" onClick={() => this.handleTabChange("1")}>
                שמור והמשך
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
              <div style={{ display: "flex", justifyContent: "center"}}>
            <Button type="primary" onClick={() => this.handleTabChange("0")} style={{ justifyContent: "center"}}>
                <Icon type="right" />
                הקודם
              </Button>
              <Button type="primary" onClick={() => this.handleTabChange("2")}>
                שמור והמשך
                <Icon type="left" />
              </Button>
              </div>
              </TabPane>
              <TabPane tab="פרטי המושכר " key="2">
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
              <div style={{ display: "flex", justifyContent: "center"}}>
            <Button type="primary" onClick={() => this.handleTabChange("1")} style={{ justifyContent: "center"}}>
                <Icon type="right" />
                הקודם
              </Button>
              <Button type="primary" onClick={() => this.handleTabChange("3")}>
                שמור והמשך
                <Icon type="left" />
              </Button>
              </div>
              </TabPane>
              <TabPane tab="הגדרת תקופת השכירות " key="3">
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

              <div style={{ display: "flex", justifyContent: "center"}}>
            <Button type="primary" onClick={() => this.handleTabChange("2")} style={{ justifyContent: "center"}}>
                <Icon type="right" />
                הקודם
              </Button>
              <Button type="primary" onClick={() => this.handleTabChange("4")}>
                שמור והמשך
                <Icon type="left" />
              </Button>
              </div>
            </TabPane>
            {this.state.showOptionpPriod && (
            <TabPane tab=" תקותאופציה" key="4">
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
              <FormItem text="1הוסף סעיף">
                <Input
                  value={this.state.AdditionalSection1}
                  onChange={({ target }) =>
                    this.setState({ AdditionalSection1: target.value })
                  }
                />
              </FormItem>
              <div style={{ display: "flex", justifyContent: "center"}}>
            <Button type="primary" onClick={() => this.handleTabChange("3")} style={{ justifyContent: "center"}}>
                <Icon type="right" />
                הקודם
              </Button>
              <Button type="primary" onClick={() => this.handleTabChange("5")}>
                שמור והמשך
                <Icon type="left" />
              </Button>
              </div>
            </TabPane>
            )}

              <TabPane tab="התמורה " key="5">

              <FormItem text="מהו גובה שכר הדירה החודשי הנדרש?">
                <Input
                  value={this.state.monthlypayment}
                  onChange={({ target }) =>
                    this.setState({ monthlypayment: target.value })
                  }
                />
              </FormItem>
              {this.state.showOptionpPriod && (
              <FormItem text="מהו גובה שכר הדירה החודשי בתקופת האופציה?">
                <Input
                  value={this.state.monthlyoptionpayment}
                  onChange={({ target }) =>
                    this.setState({ monthlyoptionpayment: target.value })
                  }
                />
              </FormItem>
              )}
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
              <FormItem text="באיזה יום בחודש ידרש השוכר לשלם את שכר הדירה / התמורה?">
                <select
                  style={{ width: 132 }}
                  value={this.state.paymentmethodo}
                  onChange={({ target }) =>
                    this.setState({ paymentmethodo: target.value })
                  }
                >
                  <option value="checks">צ׳קים</option>
                  <option value="EFT"> העברה בנקאית</option>
                </select>
              </FormItem>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 5}}>
            <Button 
            type="primary"
            onClick={() =>  this.setState({ showchecks: !this.state.showchecks })}>
            תשלום בצ׳קים
            </Button>
            <Button 
            type="primary"
            onClick={() =>  this.setState({ showEFT: !this.state.showEFT })}>
            העברה בנקאית
            </Button>
            </div>
            <div >
              {this.state.showchecks && ('הוזן להסכם תשלום בצ׳קים')}
              {this.state.showEFT && (
              <FormItem text="חשבון המשכיר">
                <Input style={{marginTop: 2}}
                  placeholder= "מספר בנק"
                  value={this.state.banknumber}
                  onChange={({ target }) =>
                    this.setState({ banknumber: target.value })
                  }
                />
                <Input style={{marginTop: 2}}
                  placeholder= "מספר סניף"
                  value={this.state.brancknumber}
                  onChange={({ target }) =>
                    this.setState({ brancknumber: target.value })
                  }
                />
                <Input style={{marginTop: 2}}
                  placeholder= "מספר חשבון"
                  value={this.state.accountnumber}
                  onChange={({ target }) =>
                    this.setState({ accountnumber: target.value })
                  }
                />
              </FormItem>
              )}
              <FormItem text="לאחר כמה ימי איחור בתשלום יוכל המשכיר לפרוע את צ׳ק הביטחון?">
                <Input
                  value={this.state.delayinpayment}
                  onChange={({ target }) =>
                    this.setState({ delayinpayment: target.value })
                  }
                />
              </FormItem>
            </div>
              <FormItem text="הוספת סעיף">
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
             <div style={{ display: "flex", justifyContent: "center"}}>
            <Button type="primary" onClick={() => this.handleTabChange("4")} style={{ justifyContent: "center"}}>
                <Icon type="right" />
                הקודם
              </Button>
              <Button type="primary" onClick={() => this.handleTabChange("6")}>
                שמור והמשך
                <Icon type="left" />
              </Button>
              </div>
            </TabPane>
            <TabPane tab=" תשלומי חובה ומיסים" key="6">
            <FormItem text="מהם תשלומי החובה והמסים שיוטלו על השוכר?">
                <Input
                  value={this.state.tax}
                  onChange={({ target }) =>
                    this.setState({ tax: target.value })
                  }
                />
              </FormItem>

              <div style={{ display: "flex", justifyContent: "center"}}>
            <Button type="primary" onClick={() => this.handleTabChange("5")} style={{ justifyContent: "center"}}>
                <Icon type="right" />
                הקודם
              </Button>
              <Button type="primary" onClick={() => this.handleTabChange("7")}>
                שמור והמשך
                <Icon type="left" />
              </Button>
              </div>
            </TabPane>
            <TabPane tab=" פיצוי מוסכם" key="7">
            <FormItem text="מהו סכום הפיצוי המוסכם היומי בגין אי פינוי המושכר על ידי השוכר במועד?">
                <Input
                  value={this.state.compensation}
                  onChange={({ target }) =>
                    this.setState({ compensation: target.value })
                  }
                />
              </FormItem>

              <div style={{ display: "flex", justifyContent: "center"}}>
            <Button type="primary" onClick={() => this.handleTabChange("6")} style={{ justifyContent: "center"}}>
                <Icon type="right" />
                הקודם
              </Button>
              <Button type="primary" onClick={() => this.handleTabChange("8")}>
                שמור והמשך
                <Icon type="left" />
              </Button>
              </div>
            </TabPane>
            <TabPane tab="תחזוקת המושכר " key="8">
            <FormItem text="כיצד המושכר נראה (למעט נקי ומתאים למגורים)?">
                <Input
                  value={this.state.description}
                  onChange={({ target }) =>
                    this.setState({ description: target.value })
                  }
                />
              </FormItem>
              <FormItem text="סיוד הדירה בתום תקופת השכירות">
                <input
                  type="checkbox"
                  onChange={() => this.setState({ plastering: !this.state.plastering })}
                />
              </FormItem>
              <FormItem text="תוך כמה זמן על המשכיר לתקן את הנזקים שעליו לתקן והמצריכים תיקון מיידי? ">
                <select
                style={{ width: 132 }}
                value={this.state.hoursfix}
                onChange={({ target }) =>
                  this.setState({ hoursfix: target.value })
                }
              >
                <option value="24 ">24 שעות</option>
                <option value="48"> 48 שעות</option>
                <option value="72">72 שעות</option>
                <option value="_____ ">אחר </option>
              </select>
              </FormItem>
              <FormItem text="  קיימים פגמים בדירה ">
                <input
                  type="checkbox"
                  onChange={() => this.setState({ showflaw: !this.state.showflaw })}
                />
              </FormItem>
              {this.state.showflaw && (
              <FormItem text="מהם הפגמים במושכר שיפגעו בצרכי השוכר במהלך תקופת השכירות וידרשו תיקון בידי המשכיר?">
              <Input
                value={this.state.flaw}
                onChange={({ target }) =>
                  this.setState({ flaw: target.value })
                }
              />
            </FormItem>
                
              )}
            <FormItem text="האם מותר לגדל ולהחזיק בעלי חיים במושכר?">
                <select
                style={{ width: 132 }}
                value={this.state.pets}
                onChange={({ target }) =>
                  this.setState({ pets: target.value })
                }
              >
                <option value="השוכר אינו רשאי לגדל או להחזיק כל בעל חיים במושכר. ">אסור</option>
                <option value="השוכר מתחייב לשמור על ניקיון המושכר וסביבותיו, על השקט ועל יחסי שכנות טובה עם השכנים בבניין. כן השוכר רשאי לגדל חיות מחמד במושכר בתנאי שגידולם לא יוביל לסטייה מחובתו לשמור על ניקיון המושכר וסביבותיו, על השקט ועל יחסי שכנות טובה עם השכנים בבניין. ">מותר</option>

              </select>
              </FormItem>
              <FormItem text="האם מותר לגדל ולהחזיק בעלי חיים במושכר?">
                <select
                style={{ width: 132 }}
                value={this.state.pets}
                onChange={({ target }) =>
                  this.setState({ pets: target.value })
                }
              >
                <option value="העישון בדירה אסור לחלוטין, כל עישון בדירה יחויב בקנס של 1,000 ₪.  ">אסור</option>
                <option value="העישון בדירה אסור לחלוטין/אפשר לעשן רק במרפסת/כל עישון בדירה יחויב בקנס בסך של 1,000 ₪.">מותר</option>

              </select>
              </FormItem>
              <div style={{ display: "flex", justifyContent: "center"}}>
            <Button type="primary" onClick={() => this.handleTabChange("7")} style={{ justifyContent: "center"}}>
                <Icon type="right" />
                הקודם
              </Button>
              <Button type="primary" onClick={() => this.handleTabChange("9")}>
                שמור והמשך
                <Icon type="left" />
              </Button>
              </div>
              <SaveFile elementId={this.contractElementId} />
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
          <Element name="section2">
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
          </Element>
          <div style={{ display: "flex", marginTop: -25 }}>
            <p style={{ marginLeft: 20 }}>והואיל:</p>
            <div style={{ flex: 1 }}>
              <p style={{ textAlign: "justify" }}>{`  ולשוכר ידוע כי ביום תחילתו של חוק הגנת הדייר (נוסח משולב), התשל"ב-1972 ו/או ביום${this
                .state.signedAtDate ||
                "___"} ולאחר מכן היה המושכר פנוי ולא היה דייר שהיה זכאי להחזיק בו, וכי לא יחולו ביחס למושכר הוראות חוק הגנת הדייר ו/או כל הוראות הבאות להגביל את השכירות;
                `}</p>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: -25 }}>
            <p style={{ marginLeft: 20 }}>והואיל:</p>
            <div style={{ flex: 1 }}>
              <p style={{ textAlign: "justify" }}>{`  והמשכיר מעוניין להשכיר לשוכר את המושכר בשכירות בלתי מוגנת, והשוכר מעוניין לשכור מהמשכיר את המושכר בשכירות בלתי מוגנת, והכל בכפוף לתנאי הסכם זה;
              `}</p>
            </div>
          </div>

          <ol>
            <p
              style={{ textAlign: "center", fontWeight: "bold" }}
            >{`ולפיכך הוסכם והותנה בין הצדדים כדלקמן:`}</p>
              <h3
                style={{
                  marginRight: -30,
                  textDecoration: "underline"
                }}
              >
                מבוא
              </h3>
            <div style={{ display: "flex" }}>
              {this.state.erace1 && (
                <li
                  style={{ textAlign: "justify" }}
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
            <Element name="section3">
            <h3
              style={{
                marginRight: -30,
                textDecoration: "underline"
              }}
            >
              תקופת השכירות
            </h3>
            </Element>
            <li style={{ textAlign: "justify" }}>
              {`המשכיר משכיר בזאת את המושכר בשכירות בלתי מוגנת לשוכר, והשוכר שוכר בזאת את המושכר בשכירות בלתי מוגנת לתקופה בת(יציג את התאריך בין 2 התאריכים שהוזנו!!!!!!!!!) חודשים החל מיום ${this
                .state.EntranceDate || "____________"} ועד יום ${this.state
                .LeaveDate || "____________"} `}{" "}
              (להלן: "<b>תקופת השכירות</b>").
            </li>
            <Element name="section4">
            {this.state.showOptionpPriod && (
            
              <li style={{ textAlign: "justify" }}>
              {`היה והשוכר החליט כי ברצונו להאריך את תקופת השכירות, והמשכיר הסכים על ההארכה בהודעה בכתב עד ${this
                .state.OptionPeriodDay || "____________"} , תקופה זו תעמוד על ${this.state
                .OptionPeriod || "____________"} `}{" "}
              (להלן: "<b>תקופת האופציה</b>").
              </li>
            
            )}
            </Element>
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
          <li style={{ textAlign: "justify" }}>

              {` השוכר מצהיר בזאת כי ידוע לו והוא מסכים לקבל את המושכר בשכירות בלתי מוגנת, וזאת בכפוף לאמור להלן: `}
              <ol type="i">
          <li style={{ textAlign: "justify" }}>

                  {` השוכר אינו ולא יהיה דייר מוגן לפי חוק הגנת הדייר (נוסח משולב), התשל"ב-1972 ולא לפי כל חוק או דין אחר; לא תחול עליו כל הגנה מכל סוג ומין שהוא וכל הגנה מההגנות הקנויות לדייר מוגן.  `}
                </li>
          <li style={{ textAlign: "justify" }}>

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
            <Element name="section5">
            <h3
              style={{
                marginRight: -30,
                textDecoration: "underline"
              }}
            >
              התמורה
            </h3>
            </Element>
            <li style={{ textAlign: "justify" }}>
              בתמורה לקבלת זכות השכירות במושכר, השוכר מתחייב לשלם לידי המשכיר סך
              של {this.state.monthlypayment || "____________"} מדי ה-{" "}
              {this.getpaymentday() || "_____"} לחודש.
            </li>
            {this.state.showOptionpPriod && (
            <p style={{ textAlign: "justify" }}>    
              היה והצדדים הגיעו להבנות כי השוכר יממש את תקופת האופציה, המשכיר רשאי להעלות את גובה דמי השכירות עם תחילת תקופת האופציה לסך של {this.state.monthlyoptionpayment || "____________"} אלא אם המשכיר הודיע לשוכר כי אין בכוונתו לממש את זכותו להעלאת דמי השכירות כאמור. 
            </p>
            )}
            {this.state.showchecks && (
            <p style={{ textAlign: "justify" }}>
              השוכר יפקיד (מספר חודשי השיכורת!!!!!!!) שיקים ע"ס {this.state.monthlypayment || "____________"} כל אחד להקלה על גביית דמי השכירות. היה והשוכר ישכור את המושכר מעל 12 חודשים, יהא עליו להפקיד עד 12 שיקים בתחילת כל שנת שכירות חדשה, בהתאם ליום החתימה על ההסכם ומספר חודשי השכירות באותה השנה.
            </p>
            )}
            {this.state.showEFT && (
            <p style={{ textAlign: "justify" }}>
           השוכר יידרש לשלם את שכר הדירה החודשי בדרך של הוראת קבע לחשבון שמספרו {this.state.accountnumber || "__________"} - {this.state.brancknumber || "______"} - {this.state.banknumber || "___"} או מזומן, לפי החלטת המשכיר, מדי {this.getpaymentday() || "_____"} לחודש.
            </p>
            )}
          <li style={{ textAlign: "justify" }}>
              השוכר מתחייב לשלם את דמי השכירות באופן שוטף, מדויק, מלא, חודש בחודשו ובמועד המצויין לעיל.
          </li>
          <li style={{ textAlign: "justify" }}>
          בנוסף לכל סעד אחר העומד לזכות המשכיר על פי דין, איחור בתשלום כלשהו מדמי השכירות העולה מעל {this.state.delayinpayment || "____________"} ימים יוביל לעמידת השיק שברשות המשכיר לפירעון מיידי כנגד אותו חודש נשוא האיחור. 
          </li>
          <h3
              style={{
                marginRight: -30,
                textDecoration: "underline"
              }}
            >
              אי עבירות ואי משכון זכות השכירות
            </h3>
          <li style={{ textAlign: "justify" }}>
              {` השוכר מתחייב שלא להעביר/להשכיר/למסור/למשכן את זכויותיו על פי הסכם זה (שימוש וחזקה), מקצתם או כולם, לאף צד ג' ושלתת לו להשתמש ו/או ליהנות מזכויותיהם במושכר אלא למטרות אירוח סביר בלבד, למעט לינה יותר מלילה אחד בשבוע אלא אם סוכם אחרת מראש ובכתב. תנאי זה כולל גם בין אם אחת מהפעולות הנ"ל נעשו בין בתמורה ובין שלא בתמורה אלא אם כן הן קיבלו את הסכמת המשכיר מראש ובכתב.  `}
         </li>
         <li style={{ textAlign: "justify" }}>
              {`המושכר ישמש אך ורק למטרת מגורים, ועל השוכר לנהוג בו כמנהג בעלים, ולעשות בו שימוש הוגן וסביר, לרבות שמירה על השקט, הניקיון והסדר במושכר ועל כל הכללים הנהוגים מכוח הנוהג במקום. `}
         </li>
         <li style={{ textAlign: "justify" }}>
              {`השוכר מצהיר כי ידוע לו שכל שיפור/שינוי/כל תוספת במושכר שייעשה, במידה שייעשה, יהיה רכוש המשכיר בלבד, והם לא יהיו זכאים לדרוש בחזרה את התוספת/התיקון/תמורתם. השוכר מוותר על כל טענה או תביעה שתהיה לו, אם תהיה, כלפי המשכיר ביחס לכל שינוי/תיקון/תוספת כאמור לעיל .`}      
        </li>
            <Element name="section6">
            <h3
              style={{
                marginRight: -30,
                textDecoration: "underline"
              }}
            >
              תשלומי חובה ומסים
            </h3>
            </Element>
            <li style={{ textAlign: "justify" }}>
            השוכר מתחייב לעמוד בתשלומי החובה והמסים, ובכללם 
            {" "}{this.state.tax || "____________"}.
              השוכר מתחייב לשלם חיובים אלה במועד, זאת בהתאם למועד הנדרש לאותו תשלום חובה ו/או מס, ולהעביר את חיובים אלה על שמו ברישומי הגופים הרלבנטיים, לרבות רשות מקומית, מדינת ישראל, חברת החשמל, תאגיד מים, חברת כבלים וכדומה.  
            </li>
            <li style={{ textAlign: "justify" }}>
              היה והשוכר לא יעמוד בתשלומים אלה, ובעקבות זאת נודע למשכיר אודות אי התשלום כאמור, תהא באפשרות המשכיר לבטל את הסכם זה בהודעה בכתב לשוכר בתוך 30 ימים מהיום שנודע לו על כך. יובהר כי אין במימוש אפשרות זו בידי המשכיר כדי לפגוע או לגרוע מזכותו לתבוע כל תרופה אחרת על פי דין.  
            </li>
            <Element name="section7">
            <h3
              style={{
                marginRight: -30,
                textDecoration: "underline"
              }}
            >
              פיצוי מוסכם
            </h3>
            </Element>
            <li style={{ textAlign: "justify" }}>
            אם השוכר לא יפנה את הדירה בתום תקופת השכירות, יהא עליו לשלם למשכיר סך של
            {" "}{this.state.compensation || "____________"}{" "}ש״ח.
              לכל יום של פיגור בפינוי הדירה והחזרתה למשכיר, וזאת מבלי לפגוע בזכויות המשכיר לכל סעד משפטי אחר ו/או לתביעת תשלום פיצויים גבוהים יותר. הסכום הנ"ל ישולם בשקלים ישראליים לפי השער היציג של הדולר של ארה"ב המפורסם במועד התשלום.
            </li>
            <Element name="section8">
            <h3
              style={{
                marginRight: -30,
                textDecoration: "underline"
              }}
            >
              תחזוקת המושכר
            </h3>
            </Element>
            <li style={{ textAlign: "justify" }}>
            השוכר מתחייב לשמור על הדירה והחפצים שמירה מעולה ולתקן ולחזור ולתקן  על חשבונו  ולשביעות רצון  המשכיר או ב"כ כל פגם או ליקוי במושכר כתוצאה משימוש בו על ידו או מי מטעמו מיד עם דרישת  המשכיר או בא  כוחו לכך ו/או מיד עם  התגלות הפגם  או הליקוי,  הכל לפי  המוקדם, למעט בלאי סביר ורגיל שיתהווה כתוצאה משימוש  סביר וזהיר.  השוכר מתחייב להחזיר למשכיר את המושכר מסודר, נקי ובמצב מעולה, למעט בלאי סביר כאמור לעיל.
            היה והשוכר לא יתקן את הפגם או הליקוי במושכר שנוצר כתוצאה משימוש בו על ידו או מי מטעמו מיד עם דרישת  המשכיר או בא  כוחו לכך ו/או מיד עם  התגלות הפגם  או הליקוי כאמור לעיל, המשכיר רשאי לקזז את נזקיו הקצובים משכר הדירה החודשי כנגד קבלות/חשבוניות מס שימציא המשכיר לשוכר. 
            </li>
            <li style={{ textAlign: "justify" }}>
            השוכר מצהיר כי קיבל את המושכר נקי, 
            {" "}{this.state.description || "____________"}{" "}.
            ומתאים למגורים,  ובמידה שהמושכר נמסר לידי השוכר כשהוא מסויד - השוכר מתחייב לסיידו על חשבונו עם החזרתו למשכיר.
            {" "}{this.state.plastering && ('כן מתחייב השוכר לסייד את המושכר בתום תקופת השכירות.')}
            </li>
            <li style={{ textAlign: "justify" }}>
            השוכר יפצה את המשכיר במלוא הנזקים שייגרמו לו כתוצאה מהפרת תנאי מתנאי סעיף זה או כל תנאי אחר מהסכם זה.
            </li>
            <li style={{ textAlign: "justify" }}>
            המשכיר מצדו יהיה חייב לתקן פגמים ו/או קלקולים, שאינם תוצר של שימוש ובלאי סביר, אשר יתהוו במשך תקופת השכירות, והחובה לתקנם תהא עליו כמשכיר תוך זמן סביר מיום דרישת השוכר, כגון: נזילות בצנרת, תקלות במים דלוחים, בעיות במערכת החשמל המרכזית וכיו"ב.    
           </li>
           <li style={{ textAlign: "justify" }}>
           אם ייגרמו לדירה נזקים שעל המשכיר לתקנם והמצריכים תיקון מיידי, והמשכיר לא יעשה כן תוך            
           {" "}{this.state.hoursfix || "____________"}{" "}
           שעות – יהיה השוכר רשאי לתקן על חשבונו, ועל המשכיר יהיה להחזיר לשוכר את הוצאותיו בגין קבלות שימציא השוכר למשכיר. היה  ולא יחזיר המשכיר לשוכר את הוצאות התיקונים הנ"ל, יהיה השוכר רשאי לקזזן מדמי השכירות עד כדי סך נזקיו הקצובים לאחר שהמציא למשכיר חשבוניות מס מאיש מקצוע.  
           </li>
           <li style={{ textAlign: "justify" }}>
           השוכר יהיה אחראי על חשבונו לפצות צד ג' כלשהו על כל הנזקים שהוא עלול לגרום לו בגין השימוש במושכר, בין אם נגרם הנזק בו או בין מחוצה לו. כן על השוכר להחזיר למשכיר כל סכום שייתבע על ידו בקשר לנזקים כאמור, והכל אם נזקים אלו ייגרמו כתוצאה מרשלנותו של השוכר.
           </li>
           <li style={{ textAlign: "justify" }}>
            היה והמושכר כולל מחסן ו/או גג ו/או שטח חקלאי מכל סוג ומין שהוא ו/או כל מקרקעין או מיטלטלין נלווה למושכר, השוכר מתחייב לשמור על תקינותם, שלמותם, שווים ותפקודם ולמוסרם לידי המשכיר בתום תקופת השכירות, כשהם במצב מעולה ותקין.
            {" "}{this.state.insurance && (' כן השוכר מתחייב לבטח את כל אלה בהתאם לאמור בסעיפי הביטוח של הסכם זה.')}
            </li>
            {this.state.pool && (
            <li style={{ textAlign: "justify" }}>
            היה והמושכר כולל בריכה, השוכר מתחייב לשמור על תקינותה, שלמותה, שווייה ותפקודה ולמוסרה לידי המשכיר בתום תקופת השכירות, כשהיא במצב מעולה ותקין. כן על השוכר לשמור על ניקיונה, ובכלל זה לדאוג להחלפת אספקת הכלור בבריכה, ועל תקינות חדר המכונות של הבריכה על חשבונו במהלך תקופת השכירות ובתום תקופת השכירות.
            {" "}{this.state.insurance && (' כן השוכר מתחייב לבטח את כל אלה בהתאם לאמור בסעיפי הביטוח של הסכם זה.')}
            </li>
            )}
            {this.state.yard && (
            <li style={{ textAlign: "justify" }}>
            היה והמושכר כולל גינה, השוכר מתחייב לשמור על תקינותה, שלמותה, שווייה ותפקודה ולמוסרה לידי המשכיר בתום תקופת השכירות, כשהיא במצב מעולה ותקין. כן על השוכר לדאוג לטיפוח הגינה על חשבונו באמצעות כל האמצעים העומדים לרשותו במהלך תקופת השכירות.
            {" "}{this.state.insurance && (' כן השוכר מתחייב לבטח את כל אלה בהתאם לאמור בסעיפי הביטוח של הסכם זה.')}
            </li>
            )}
            <li style={{ textAlign: "justify" }}>
            השוכר מתחייב לפנות את המושכר בתום התקופה הקצובה ולהחזיר את החזקה הבלעדית בה לידי המשכיר או בא כוחו, לרבות כל מפתח שניתן לו על ידי המשכיר.  
            </li>
            <li style={{ textAlign: "justify" }}>
            השוכר מצהיר כי ראה ובדק את המושכר ומצא אותו במצב מעולה, תקין ומתאים לדרישותיו, והשוכר מוותר על כל טענת אי התאמה או טענה בקשר למושכר או בגין פגם ו/או מום גלוי ו/או נסתר ו/או נעלם. 
            </li>
            <li style={{ textAlign: "justify" }}>
            המשכיר מצהיר כי היה והשוכר ימצא פגם, העולה כדי אי התאמה, במהלך תקופת השכירות, על המשכיר לתקן את המושכר בהתאם, ובכלל זה הזמנת איש מקצוע על חשבון המשכיר במידת הצורך. 
            {" "}{this.state.showflaw && (' הפגמים המוסכמים על ידי הצדדים כאי התאמה הם:')}
            {" "}{this.state.showflaw && (<div>{this.state.flaw || ""}</div>)}
           </li>
           <li style={{ textAlign: "justify" }}>
           {this.state.pets || "השוכר אינו רשאי לגדל או להחזיק כל בעל חיים במושכר."} 
          </li>
          <li style={{ textAlign: "justify" }}>
           {this.state.pets || "העישון בדירה אסור לחלוטין, כל עישון בדירה יחויב בקנס של 1,000 ₪. "} 
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
