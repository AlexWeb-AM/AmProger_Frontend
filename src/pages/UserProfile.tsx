import { FaArrowLeft, FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; // исправлен импорт
import { getUser } from "../slices/userSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../store/store";
import { LuLogOut } from "react-icons/lu";
import { BiLike } from "react-icons/bi";

export const UserProfile = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { user, loading } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (!user && !loading) {
            dispatch(getUser());
        }
    }, [dispatch, user, loading]);

    const getInitials = (fullName: string | undefined) => {
        if (!fullName) return "";
        const nameParts = fullName.trim().split(" ");
        if (nameParts.length === 1) {
            return nameParts[0].charAt(0).toUpperCase();
        }
        return nameParts
            .slice(0, 2)
            .map((part) => part.charAt(0).toUpperCase())
            .join("");
    };

    const routeId = localStorage.getItem("routeId") || "default";
    return (
        <div className="user_profile_main">
            <div className="container">
                <div className="button_back">
                    <Link to={`/user/${routeId}/posts`}>
                        <button>
                            <FaArrowLeft />
                        </button>
                    </Link>
                </div>
                <div className="header_div_user">
                    <div className="part1_user_profile">
                        <div className="radius_div_profile">{getInitials(user?.name)}</div>
                        <div className="radius_text_div">
                            <h1>{user?.name}</h1>
                            <h3>{user?.email}</h3>
                        </div>
                    </div>
                </div>
                <div className="data_active">
                    <div className="block_data">
                        <div>
                            <img className="icon_div" src="/images/posts_icon_light.svg" alt="" />
                            <h3>Պոստեր</h3>
                        </div>
                        <div className="number_of_data">
                            {user?.posts}
                        </div>
                    </div>
                    <div className="block_data">
                        <div>
                            <BiLike className="icon_div" />
                            <h3>Հավանումներ</h3>
                        </div>
                        <div className="number_of_data">
                            {user?.likes}
                        </div>
                    </div>
                </div>
                <div className="saved_post_div">
                    <div className="name_div">
                        <h1><FaRegBookmark className="save_icon" /> Պահպանված Փոստեր</h1>
                    </div>
                    {user?.savePosts ? (
                            <div>
                                <div>Պահպանված Փոստեր</div>
                            </div>
                        ) : (
                            <h3>Պահպանված փոստեր չկան</h3>
                        )}
                </div>
                <div className="logout_div">
                        <LuLogOut />Ելք
                </div>
            </div>  
        </div>
    );
};
