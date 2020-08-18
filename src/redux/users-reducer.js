//Вывод всех пользователей//
const Follow = "followActionCreator";
const unFollow = "unfollowActionCreator";
const Set_Users = "setUserActionCreator ";

let initialState = {
  users: [
   /* {
      id: 1,
      avaPhoto:
        "https://i8.rozetka.ua/goods/16560747/178067548_images_16560747526.jpg",
      follow: true,
      fullName: "Angelina",
      location: { city: "Kharkiv", country: "Ukraine" },
    },
    {
      id: 2,
      avaPhoto:
        "https://images.ua.prom.st/1589697497_w640_h640_poster-marvel-kapitan.jpg",
      follow: false,
      fullName: "Steven",
      location: { city: "New York City", country: "USA" },
    },
    {
      id: 3,
      avaPhoto:
        "https://i.pinimg.com/originals/5b/53/14/5b53149a4d565b6aef1ca491c1dd7076.jpg",
      follow: false,
      fullName: "Thor",
      location: { city: "---", country: "Asgard" },
    },
    {
      id: 4,
      avaPhoto:
        "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/91/E4EC70AD-FBB0-4763-B662-9F3D075BE5E1.jpg/revision/latest?cb=20190527205113&path-prefix=ru",
      follow: true,
      fullName: "Thanos",
      location: { city: "---", country: "Titan" },
    },*/
  ],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Follow:
      return {
        ...state,
        users: state.users.map((usr) => {
          if (usr.id === action.userId) {
            return { ...usr, follow: true };
          }
          return usr;
        }),
      };

    case unFollow:
      return {
        ...state,
        users: state.users.map((usr) => {
          if (usr.id === action.userId) {
            return { ...usr, follow: false };
          }
          return usr;
        }),
      };
    case Set_Users: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: Follow, userId });
export const unfollowActionCreator = (userId) => ({ type: unFollow, userId });
export const setUserActionCreator = (users) => ({ type: Set_Users, users });

export default usersReducer;
