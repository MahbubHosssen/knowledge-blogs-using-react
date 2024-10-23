import profile from "../../assets/images/profile.png";



function Header() {
    return (
        <div className="flex justify-between items-center border-b py-4">
            <h2 className="text-4xl font-bold">Knowledge Cafe</h2>
            <img src={profile} alt="" />
        </div>
    );
}

export default Header;