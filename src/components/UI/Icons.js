import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Icons = {};

const Account = () => <MaterialCommunityIcons name="account" size={30} />;
const Add = () => <MaterialIcons name="add" size={16} />;
const Call = () => <Ionicons name="call" size={30} color="white" />;
const CallSupport = () => <Ionicons name="call" size={30} />;
const Delete = () => <MaterialIcons name="delete" size={16} />;
const Edit = () => <MaterialIcons name="edit" size={16} />;
const Form = () => <AntDesign name="form" size={30} color="white" />;
const Home = () => <FontAwesome name="home" size={30} />;
const LiveChat = () => <Entypo name="chat" size={30} color="white" />;
const Plane = () => <FontAwesome name="plane" size={30} />;

// Compose
Icons.Account = Account;
Icons.Add = Add;
Icons.Call = Call;
Icons.CallSupport = CallSupport;
Icons.Delete = Delete;
Icons.Edit = Edit;
Icons.Form = Form;
Icons.Home = Home;
Icons.LiveChat = LiveChat;
Icons.Plane = Plane;

export default Icons;
