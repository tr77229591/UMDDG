package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	pb "github.com/hyperledger/fabric/protos/peer"
)

// peer chaincode invoke -n mycc -c '{"Args":["addEvent","{\"id\":\"E1\",\"dateFrom\":\"1994-05-27\",\"dateTo\":\"1994-05-27\",\"title\":\"Fuck\"}"]}' -C myc

// peer chaincode query -n mycc -c '{"Args":["query","E1"]}' -C myc

var logger = shim.NewLogger("DDGUM_cc0")

type Course struct {
	//ObjectType string `json:"DocType"` //DocType is used to distinguish the various types of objects in state database
	//the field tags are needed to keep case from bouncing around
	DocType     string   `json:"docType"`
	ID          string   `json:"id"`
	CourseCode  string   `json:"courseCode"`
	Seminar     string   `json:"seminar"`
	Year        string   `json:"year"`
	Teacher     string   `json:"teacher"`
	Date        []string `json:"date"`
	CourseTitle string   `json:"courseTitle"`
	Room        string   `json:"room"`
	TimeFrom    string   `json:"timeFrom"`
	TimeTo      string   `json:"timeTo"`
}

type Event struct {
	//ObjectType string `json:"DocType"` //DocType is used to distinguish the various types of objects in state database
	DocType  string `json:"docType"`
	ID       string `json:"id"`
	DateFrom string `json:"dateFrom"`
	DateTo   string `json:"dateTo"`
	Title    string `json:"title"`
}

type Sports struct {
	//ObjectType string `json:"DocType"` //DocType is used to distinguish the various types of objects in state database
	DocType      string `json:"docType"`
	ID           string `json:"id"`
	Place        string `json:"place"`
	OpenTimeFrom string `json:"openTimeFrom"`
	OpenTimeTo   string `json:"openTimeTo"`
}

type PCRoom struct {
	//ObjectType string `json:"DocType"` //DocType is used to distinguish the various types of objects in state database
	DocType  string `json:"docType"`
	ID       string `json:"id"`
	Building string `json:"building"`
	RoomNo   string `json:"roomNo"`
	Date     string `json:"date"`
}

type User struct {
	DocType   string   `json:"docType"`
	ID        string   `json:"id"`
	Name      string   `json:"name"`
	Avatar    string   `json:"avatar"`
	StudentNo string   `json:"studentNo"`
	Course    []string `json:"course"`
	Credit    string   `json:"credit"`
}

type BookingItem struct {
	//ObjectType string `json:"DocType"` //DocType is used to distinguish the various types of objects in state database
	DocType     string `json:"docType"`
	ID          string `json:"id"`
	BookingType string `json:"bookingType"`
	TimeFrom    string `json:"timeFrom"`
	TimeTo      string `json:"timeTo"`
	UserID      string `json:"userID"`
	Date        string `json:"date"`
}

type Product struct {
	DocType     string `json:"docType"`
	ID          string `json:"id"`
	ProductType string `json:"productType"`
	MerchantID  string `json:"merchantID"`
	VURL        string `json:"vURL"`
	Img         string `json:"img"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Price       string `json:"price"`
}

type Merchant struct {
	DocType   string   `json:"docType"`
	ID        string   `json:"id"`
	Name      string   `json:"name"`
	Avatar    string   `json:"avatar"`
	ProductID []string `json:"productID"`
	Credit    string   `json:"credit"`
}

// DDGUMChainCode implementation
type DDGUMChainCode struct {
}

func (t *DDGUMChainCode) Init(stub shim.ChaincodeStubInterface) pb.Response {
	// 直接正确返回
	return shim.Success(nil)
}

// Transaction makes payment of X units from A to B
func (t *DDGUMChainCode) Invoke(stub shim.ChaincodeStubInterface) pb.Response {
	logger.Info("########### DDGUMChainCode Invoke ###########")

	function, args := stub.GetFunctionAndParameters()
	fmt.Println("invoke is running " + function)
	switch function {
	case "addCourse":
		return t.addCourse(stub, args)
	case "addEvent":
		return t.addEvent(stub, args)
	case "addSports":
		return t.addSports(stub, args)
	case "addPCRoom":
		return t.addPCRoom(stub, args)
	case "addUser":
		return t.addUser(stub, args)
	case "addBookingItem":
		return t.addBookingItem(stub, args)
	case "addProduct":
		return t.addProduct(stub, args)
	case "addMerchant":
		return t.addMerchant(stub, args)
	case "query":
		return t.query(stub, args)
	case "queryByObjectType":
		return t.queryByObjectType(stub, args)
	case "update":
		return t.update(stub, args)
	default:
		logger.Errorf("Unknown action, check the first argument, got: %v", args[0])
		return shim.Error(fmt.Sprintf("Unknown action, check the first argument, got: %v", args[0]))
	}
}

// Add
func (t *DDGUMChainCode) addCourse(stub shim.ChaincodeStubInterface, args []string) pb.Response {

	if len(args) != 1 {
		return shim.Error("Incorrect arguments, please check your arguments")
	}

	course := newCourseInst()

	err := json.Unmarshal([]byte(args[0]), &course)
	if err != nil {
		return shim.Error(err.Error())
	}

	IDCheck, err := stub.GetState(course.ID)
	if err != nil {
		return shim.Error("Failed to get enterprise: " + err.Error())
	} else if IDCheck != nil {

		fmt.Println("This Course already exists.\nID: " + course.ID + "\nName: " + course.CourseTitle + "\n")
		return shim.Error("This Course already exists.\nID: " + course.ID + "\nName: " + course.CourseTitle + "\n")
	}

	courseJSONByte, err := json.Marshal(*course)
	if err != nil {
		return shim.Error(err.Error())
	}
	fmt.Println(string(courseJSONByte))

	err = stub.PutState(course.ID, courseJSONByte)
	if err != nil {
		return shim.Error(err.Error())
	}

	return shim.Success(nil)
}
func (t *DDGUMChainCode) addEvent(stub shim.ChaincodeStubInterface, args []string) pb.Response {

	if len(args) != 1 {
		return shim.Error("Incorrect arguments, please check your arguments")
	}

	//ID := args[0]
	//Name := args[1]
	//Address := args[2]
	////Project_Involvement := []string{}
	//Project_Involvement := (args[3])

	event := newEventInst()
	err := json.Unmarshal([]byte(args[0]), &event)
	if err != nil {
		return shim.Error(err.Error())
	}

	IDCheck, err := stub.GetState(event.ID)
	if err != nil {
		return shim.Error("Failed to get event: " + err.Error())
	} else if IDCheck != nil {

		fmt.Println("This event already exists.\nID: " + event.ID + "\nName: " + event.Title + "\n")
		return shim.Error("This event already exists.\nID: " + event.ID + "\nName: " + event.Title + "\n")
	}

	eventJSONByte, err := json.Marshal(*event)
	if err != nil {
		return shim.Error(err.Error())
	}

	fmt.Println(string(eventJSONByte))

	err = stub.PutState(event.ID, eventJSONByte)
	if err != nil {
		return shim.Error(err.Error())
	}

	return shim.Success(nil)
}

func (t *DDGUMChainCode) addSports(stub shim.ChaincodeStubInterface, args []string) pb.Response {

	if len(args) != 1 {
		return shim.Error("Incorrect arguments, please check your arguments")
	}

	sports := newSportsInst()
	err := json.Unmarshal([]byte(args[0]), &sports)
	if err != nil {
		return shim.Error(err.Error())
	}

	IDCheck, err := stub.GetState(sports.ID)
	if err != nil {
		return shim.Error("Failed to get sports: " + err.Error())
	} else if IDCheck != nil {

		fmt.Println("This sports already exists.\nID: " + sports.ID + "\nPlace: " + sports.Place + "\n")
		return shim.Error("This sports already exists.\nID: " + sports.ID + "\nPlace: " + sports.Place + "\n")
	}

	sportsJSONByte, err := json.Marshal(*sports)
	if err != nil {
		return shim.Error(err.Error())
	}
	fmt.Println(string(sportsJSONByte))

	err = stub.PutState(sports.ID, sportsJSONByte)
	if err != nil {
		return shim.Error(err.Error())
	}
	return shim.Success(nil)
}

func (t *DDGUMChainCode) addPCRoom(stub shim.ChaincodeStubInterface, args []string) pb.Response {

	/*
		新的尽职调查报告 balance sheet若有则提供ID更新，无则默认为空
		0	ID
		1	Balance_Sheet
		2	Description
	*/

	if len(args) != 1 {
		return shim.Error("Incorrect arguments, please check your arguments")
	}

	//ID := args[0]
	//Balance_Sheet := args[1]
	//Description := args[2]

	pcRoom := newPCRoomInst()
	err := json.Unmarshal([]byte(args[0]), &pcRoom)
	if err != nil {
		return shim.Error(err.Error())
	}

	IDCheck, err := stub.GetState(pcRoom.ID)
	if err != nil {
		return shim.Error("Failed to get pcRoom: " + err.Error())
	} else if IDCheck != nil {

		fmt.Println("This pcRoom already exists.\nID: " + pcRoom.ID + "\n")
		return shim.Error("This pcRoom already exists.\nID: " + pcRoom.ID + "\n")
	}
	//pcRoom := &pcRoom{ID, Balance_Sheet, Description}

	pcRoomJSONByte, err := json.Marshal(*pcRoom)
	if err != nil {
		return shim.Error(err.Error())
	}

	fmt.Println(string(pcRoomJSONByte))

	err = stub.PutState(pcRoom.ID, pcRoomJSONByte)
	if err != nil {
		return shim.Error(err.Error())
	}

	return shim.Success(nil)

}

func (t *DDGUMChainCode) addUser(stub shim.ChaincodeStubInterface, args []string) pb.Response {
	/*
		新的产品负债表 实际控制人列表为空
		0	ID
		1	LRFS
		2	Actual_Controllers
	*/

	if len(args) != 1 {
		return shim.Error("Incorrect arguments, please check your arguments")
	}

	//ID := args[0]
	//LRFS := args[1]
	//Actual_Controllers := args[2]

	user := newUserInst()
	{

	}
	err := json.Unmarshal([]byte(args[0]), &user)
	if err != nil {
		return shim.Error(err.Error())
	}

	IDCheck, err := stub.GetState(user.ID)
	if err != nil {
		return shim.Error("Failed to get BalanceSheet: " + err.Error())
	} else if IDCheck != nil {

		fmt.Println("This BalanceSheet already exists.\nID: " + user.ID + "\n")
		return shim.Error("This BalanceSheet already exists.\nID: " + user.ID + "\n")
	}
	//user := user{
	//	ID:   ID,
	//	LRFS: LRFS,
	//}

	//err = json.Unmarshal([]byte(Actual_Controllers), &user)
	//if err != nil {
	//	return shim.Error("Wrong in unmarshalling user: " + err.Error())
	//}

	userJSONByte, err := json.Marshal(*user)
	if err != nil {
		return shim.Error(err.Error())
	}
	fmt.Println(string(userJSONByte))

	err = stub.PutState(user.ID, userJSONByte)
	if err != nil {
		return shim.Error(err.Error())
	}

	return shim.Success(nil)
}
func (t *DDGUMChainCode) addBookingItem(stub shim.ChaincodeStubInterface, args []string) pb.Response {
	/*
		新的招标信息 实际控制人列表为空
		0	ID
		1	Start_Date
		2	End_Date
		3	Project
		|	Involved_FIs 空
		|	Offers	空
		|	Winner_FI	空
	*/

	if len(args) != 1 {
		return shim.Error("Incorrect arguments, please check your arguments")
	}

	//ID := args[0]
	//Start_Date := args[1]
	//End_Date := args[2]
	//Project := args[3]
	//Involved_FIs := []string{}
	//Offers := make(map[string]string)
	//Winner_FI := string("")

	bookingItem := newBookingItemInst()
	err := json.Unmarshal([]byte(args[0]), &bookingItem)
	if err != nil {
		return shim.Error(err.Error())
	}

	IDCheck, err := stub.GetState(bookingItem.ID)
	if err != nil {
		return shim.Error("Failed to get bookingItem: " + err.Error())
	} else if IDCheck != nil {

		fmt.Println("This bookingItem already exists.\nID: " + bookingItem.ID + "\n")
		return shim.Error("This bookingItem already exists.\nID: " + bookingItem.ID + "\n")
	}
	//bookingItem := &bookingItem{ID, Start_Date, End_Date, Project, Involved_FIs, Offers, Winner_FI}

	bookingItemJSONByte, err := json.Marshal(*bookingItem)
	if err != nil {
		return shim.Error(err.Error())
	}

	fmt.Println(string(bookingItemJSONByte))

	err = stub.PutState(bookingItem.ID, bookingItemJSONByte)
	if err != nil {
		return shim.Error(err.Error())
	}

	return shim.Success(nil)
}

func (t *DDGUMChainCode) addProduct(stub shim.ChaincodeStubInterface, args []string) pb.Response {
	/*
		新的招标信息 实际控制人列表为空
		0	ID
		1	Loan_Amount
		2	FID
		3	PID
		4	Interest_Rate
	*/

	if len(args) != 1 {
		return shim.Error("Incorrect arguments, please check your arguments")
	}

	//ID := args[0]
	//Loan_Amount, err := strconv.ParseInt(args[1], 10, 64)
	//if err != nil {
	//	return shim.Error("3rd argument must be a numeric string")
	//}
	//Interest_Rate, err := strconv.ParseFloat(args[2], 64)
	//if err != nil {
	//	return shim.Error("3rd argument must be a numeric string")
	//}

	product := newProductInst()
	err := json.Unmarshal([]byte(args[0]), &product)
	if err != nil {
		return shim.Error(err.Error())
	}

	IDCheck, err := stub.GetState(product.ID)
	if err != nil {
		return shim.Error("Failed to get product: " + err.Error())
	} else if IDCheck != nil {

		fmt.Println("This product already exists.\nID: " + product.ID + "\n")
		return shim.Error("This product already exists.\nID: " + product.ID + "\n")
	}
	//product := &product{ID, Loan_Amount, Interest_Rate}

	productJSONByte, err := json.Marshal(*product)
	if err != nil {
		return shim.Error(err.Error())
	}

	fmt.Println(string(productJSONByte))

	err = stub.PutState(product.ID, productJSONByte)
	if err != nil {
		return shim.Error(err.Error())
	}

	return shim.Success(nil)
}

func (t *DDGUMChainCode) addMerchant(stub shim.ChaincodeStubInterface, args []string) pb.Response {
	/*
		新的招标信息 实际控制人列表为空
		0	ID
		1	Loan_Amount
		2	FID
		3	PID
		4	Interest_Rate
	*/

	if len(args) != 1 {
		return shim.Error("Incorrect arguments, please check your arguments")
	}

	//ID := args[0]
	//Loan_Amount, err := strconv.ParseInt(args[1], 10, 64)
	//if err != nil {
	//	return shim.Error("3rd argument must be a numeric string")
	//}
	//Interest_Rate, err := strconv.ParseFloat(args[2], 64)
	//if err != nil {
	//	return shim.Error("3rd argument must be a numeric string")
	//}

	merchant := newProductInst()
	err := json.Unmarshal([]byte(args[0]), &merchant)
	if err != nil {
		return shim.Error(err.Error())
	}

	IDCheck, err := stub.GetState(merchant.ID)
	if err != nil {
		return shim.Error("Failed to get merchant: " + err.Error())
	} else if IDCheck != nil {

		fmt.Println("This merchant already exists.\nID: " + merchant.ID + "\n")
		return shim.Error("This merchant already exists.\nID: " + merchant.ID + "\n")
	}
	//merchant := &merchant{ID, Loan_Amount, Interest_Rate}

	merchantJSONByte, err := json.Marshal(*merchant)
	if err != nil {
		return shim.Error(err.Error())
	}

	fmt.Println(string(merchantJSONByte))

	err = stub.PutState(merchant.ID, merchantJSONByte)
	if err != nil {
		return shim.Error(err.Error())
	}

	return shim.Success(nil)
}

// Query
func (t *DDGUMChainCode) query(stub shim.ChaincodeStubInterface, args []string) pb.Response {

	/*
		0	ID
	*/
	var ID, jsonResp string
	var err error

	if len(args) != 1 {
		return shim.Error("Incorrect number of arguments. Expecting correct ID to query")
	}

	ID = args[0]
	valAsbytes, err := stub.GetState(ID)
	if err != nil {
		jsonResp = "{\"Error\":\"Failed to get state for " + ID + "\"}"
		return shim.Error(jsonResp)
	} else if valAsbytes == nil {
		jsonResp = "{\"Error\":\"Required data does not exist: " + ID + "\"}"
		return shim.Error(jsonResp)
	}
	//fmt.Println(string(valAsbytes))
	return shim.Success(valAsbytes)
}

func (t *DDGUMChainCode) queryByObjectType(stub shim.ChaincodeStubInterface, args []string) pb.Response {
	/*
		0	objectType
	*/
	if len(args) != 1 {
		return shim.Error("Incorrect number of arguments. Expecting 1")
	}

	objectTypeName := args[0]
	fmt.Println(objectTypeName)
	queryString := fmt.Sprintf("{\"selector\":{\"docType\":\"%s\"}}", objectTypeName)

	fmt.Println(queryString)

	queryResults, err := getResultForQueryString(stub, queryString)
	if err != nil {
		return shim.Error(err.Error())
	}
	return shim.Success(queryResults)

}

// Update
func (t *DDGUMChainCode) update(stub shim.ChaincodeStubInterface, args []string) pb.Response {

	/*
		0	structName
		1 	ID
		2	stringifyArgument
	*/
	var structName, ID, jsonResp string
	var err error

	if len(args) != 3 {
		return shim.Error("Incorrect number of arguments. Expecting updateStruct's Name, ID and stringify json for update")
	}

	structName = args[0]
	ID = args[1]
	stringifyArgument := args[2]

	// 先检查ID是否存在，如果不存在，则这个更新无意义

	valAsbytes, err := stub.GetState(ID) //get the marble from chaincode state
	if err != nil {
		jsonResp = "{\"Error\":\"Failed to get state for " + ID + "\"}"
		return shim.Error(jsonResp)
	} else if valAsbytes == nil {
		jsonResp = "{\"Error\":\"Cannot fetch the target wating for update: " + ID + "\"}"
		return shim.Error(jsonResp)
	}

	// 不同的structName初始化structure
	switch structName {
	case "Course":
		course := newCourseInst()

		// 旧的还原回这个实例
		err = json.Unmarshal(valAsbytes, &course)
		if err != nil {
			return shim.Error("Wrong in unmarshalling Course: " + err.Error())
		}

		// 更新新的json
		err = json.Unmarshal([]byte(stringifyArgument), &course)
		if err != nil {
			return shim.Error("Wrong in unmarshalling stringifyArgument to Course: " + err.Error())
		}
		fmt.Println(*course) // 打印测试用

		courseJSONByte, err := json.Marshal(*course)
		if err != nil {
			return shim.Error(err.Error())
		}

		err = stub.PutState(ID, courseJSONByte)
		if err != nil {
			return shim.Error(err.Error())
		}

		return shim.Success(nil)
	case "Event":
		event := newEventInst()

		// Recover
		err = json.Unmarshal(valAsbytes, &event)
		if err != nil {
			return shim.Error("Wrong in unmarshalling event: " + err.Error())
		}

		// Update
		err = json.Unmarshal([]byte(stringifyArgument), &event)
		if err != nil {
			return shim.Error("Wrong in unmarshalling stringifyArgument to event: " + err.Error())
		}
		fmt.Println(*event)

		eventJSONByte, err := json.Marshal(*event)
		if err != nil {
			return shim.Error(err.Error())
		}

		err = stub.PutState(ID, eventJSONByte)
		if err != nil {
			return shim.Error(err.Error())
		}

		return shim.Success(nil)
	case "Sports":
		sports := newSportsInst()
		// Recover
		err = json.Unmarshal(valAsbytes, &sports)
		if err != nil {
			return shim.Error("Wrong in unmarshalling sports: " + err.Error())
		}

		// Update
		err = json.Unmarshal([]byte(stringifyArgument), &sports)
		if err != nil {
			return shim.Error("Wrong in unmarshalling stringifyArgument to sports: " + err.Error())
		}
		fmt.Println(*sports)

		sportsJSONByte, err := json.Marshal(*sports)
		if err != nil {
			return shim.Error(err.Error())
		}

		err = stub.PutState(ID, sportsJSONByte)
		if err != nil {
			return shim.Error(err.Error())
		}

		return shim.Success(nil)
	case "PCRoom":
		pcRoom := newPCRoomInst()

		// Recover
		err = json.Unmarshal(valAsbytes, &pcRoom)
		if err != nil {
			return shim.Error("Wrong in unmarshalling pcRoom: " + err.Error())
		}

		// Update
		err = json.Unmarshal([]byte(stringifyArgument), &pcRoom)
		if err != nil {
			return shim.Error("Wrong in unmarshalling stringifyArgument to pcRoom: " + err.Error())
		}
		fmt.Println(*pcRoom)

		pcRoomJSONByte, err := json.Marshal(*pcRoom)
		if err != nil {
			return shim.Error(err.Error())
		}

		err = stub.PutState(ID, pcRoomJSONByte)
		if err != nil {
			return shim.Error(err.Error())
		}

		return shim.Success(nil)
	case "User":
		user := newUserInst()

		// Recover
		err = json.Unmarshal(valAsbytes, &user)
		if err != nil {
			return shim.Error("Wrong in unmarshalling user: " + err.Error())
		}

		// Update
		err = json.Unmarshal([]byte(stringifyArgument), &user)
		if err != nil {
			return shim.Error("Wrong in unmarshalling stringifyArgument to user: " + err.Error())
		}
		fmt.Println(*user)

		userJSONByte, err := json.Marshal(*user)
		if err != nil {
			return shim.Error(err.Error())
		}

		err = stub.PutState(ID, userJSONByte)
		if err != nil {
			return shim.Error(err.Error())
		}

		return shim.Success(nil)
	case "BookingItem":
		bookingItem := newBookingItemInst()
		// Recover
		err = json.Unmarshal(valAsbytes, &bookingItem)
		if err != nil {
			return shim.Error("Wrong in unmarshalling bookingItem: " + err.Error())
		}
		// Update
		err = json.Unmarshal([]byte(stringifyArgument), &bookingItem)
		if err != nil {
			return shim.Error("Wrong in unmarshalling stringifyArgument to bookingItem: " + err.Error())
		}
		fmt.Println(*bookingItem)

		bookingItemJSONByte, err := json.Marshal(*bookingItem)
		if err != nil {
			return shim.Error(err.Error())
		}

		err = stub.PutState(ID, bookingItemJSONByte)
		if err != nil {
			return shim.Error(err.Error())
		}

		return shim.Success(nil)
	case "Product":
		product := newProductInst()
		// Recover
		err = json.Unmarshal(valAsbytes, &product)
		if err != nil {
			return shim.Error("Wrong in unmarshalling product: " + err.Error())
		}

		// Update
		err = json.Unmarshal([]byte(stringifyArgument), &product)
		if err != nil {
			return shim.Error("Wrong in unmarshalling stringifyArgument to product: " + err.Error())
		}
		fmt.Println(*product)

		productJSONByte, err := json.Marshal(*product)
		if err != nil {
			return shim.Error(err.Error())
		}

		err = stub.PutState(ID, productJSONByte)
		if err != nil {
			return shim.Error(err.Error())
		}

		return shim.Success(nil)
	case "Merchant":
		merchant := newMerchantInst()
		// Recover
		err = json.Unmarshal(valAsbytes, &merchant)
		if err != nil {
			return shim.Error("Wrong in unmarshalling product: " + err.Error())
		}

		// Update
		err = json.Unmarshal([]byte(stringifyArgument), &merchant)
		if err != nil {
			return shim.Error("Wrong in unmarshalling stringifyArgument to product: " + err.Error())
		}
		fmt.Println(*merchant)

		merchantJSONByte, err := json.Marshal(*merchant)
		if err != nil {
			return shim.Error(err.Error())
		}

		err = stub.PutState(ID, merchantJSONByte)
		if err != nil {
			return shim.Error(err.Error())
		}
		return shim.Success(nil)
	default:
		fmt.Println("The struct Name doesn't match")
		return shim.Error("The struct Name doesn't match")
	}
}

func main() {
	err := shim.Start(new(DDGUMChainCode))
	if err != nil {
		logger.Errorf("Error starting Simple chaincode: %s", err)
	}
}

func newCourseInst() *Course {
	return &Course{
		DocType: "Course",
		Date:    []string{},
	}
}

func newEventInst() *Event {
	return &Event{
		DocType: "Event",
	}
}

func newSportsInst() *Sports {
	return &Sports{
		DocType: "Sports",
	}
}

func newPCRoomInst() *PCRoom {
	return &PCRoom{
		DocType: "PCRoom",
	}
}

func newUserInst() *User {
	return &User{
		DocType: "User",
		Course:  []string{},
	}
}

func newBookingItemInst() *BookingItem {
	return &BookingItem{
		DocType: "BookingItem",
	}
}

func newProductInst() *Product {
	return &Product{
		DocType: "Product",
	}
}

func newMerchantInst() *Merchant {
	return &Merchant{
		DocType:   "Merchant",
		ProductID: []string{},
	}
}

func getResultForQueryString(stub shim.ChaincodeStubInterface, queryString string) ([]byte, error) {

	fmt.Printf("- getResultForQueryString queryString:\n%s\n", queryString)

	resultsIterator, err := stub.GetQueryResult(queryString)
	if err != nil {
		return nil, err
	}
	defer resultsIterator.Close()

	// buffer is a JSON array containing QueryRecords
	var buffer bytes.Buffer
	buffer.WriteString("[")

	bArrayMemberAlreadyWritten := false
	for resultsIterator.HasNext() {
		queryResponse, err := resultsIterator.Next()
		if err != nil {
			return nil, err
		}
		// Add a comma before array members, suppress it for the first array member
		if bArrayMemberAlreadyWritten == true {
			buffer.WriteString(",")
		}
		buffer.WriteString("{\"Key\":")
		buffer.WriteString("\"")
		buffer.WriteString(queryResponse.Key)
		buffer.WriteString("\"")

		buffer.WriteString(", \"Record\":")
		// Record is a JSON object, so we write as-is
		buffer.WriteString(string(queryResponse.Value))
		buffer.WriteString("}")
		bArrayMemberAlreadyWritten = true
	}
	buffer.WriteString("]")

	fmt.Printf("- getResultForQueryString Result:\n%s\n", buffer.String())

	return buffer.Bytes(), nil
}
