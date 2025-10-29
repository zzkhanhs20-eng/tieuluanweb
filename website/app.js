// app.js - upgraded functionality (modules omitted for single-file simplicity)

/* --- Sample data: extended with rating, views, youtube (optional), trending scores --- */
/* CẬP NHẬT DỮ LIỆU VỚI THÔNG TIN TƯƠNG TÁC MỚI */
// === Dữ liệu phim với comment mẫu đã thêm (CODE 09) ===
const movies = [
    {
      id: 1,
      title: "Spider-Man: No Way Home",
      year: 2021,
      genres: ["Hành động", "Phiêu lưu", "Marvel"],
      poster: "assets/spiderman.jpg",
      description: "Peter Parker đối mặt với kẻ thù từ đa vũ trụ sau khi danh tính bị tiết lộ.",
      director: "Jon Watts",
      cast: ["Tom Holland", "Zendaya"],
      rating: 8.3,
      views: 12500,
      youtube: "https://www.youtube.com/embed/JfVOs4VSpmA",
      user_rating: 0,
      likes: 250,
      dislikes: 12,
      comments: [
        { user: 'User1', text: 'Phim quá hay, kỹ xảo đỉnh cao!', date: '2025-10-20', avatar: 'assets/avatar/anh1.jpg' },
        { user: 'HieuNT', text: 'Mong chờ phần tiếp theo!', date: '2025-10-21', avatar: 'assets/avatar/anh2.jpg' },
        { user: 'MarvelFan', text: 'Cảm xúc vỡ òa khi thấy cả 3 nhện!', date: '2025-10-22', avatar: 'assets/avatar/anh5.jpg' }
      ]
    },
    {
      id: 2,
      title: "Bố Già",
      year: 2021,
      genres: ["Tâm lý", "Gia đình", "Phim Việt"],
      poster: "assets/bogia.jpg",
      description: "Câu chuyện xúc động về tình cha con ở Sài Gòn.",
      director: "Trấn Thành",
      cast: ["Trấn Thành", "Tuấn Trần"],
      rating: 8.0,
      views: 9800,
      youtube: "",
      user_rating: 0,
      likes: 180,
      dislikes: 5,
      comments: [
        { user: 'TuanVN', text: 'Phim Việt Nam chất lượng, đáng xem!', date: '2025-11-01', avatar: 'assets/avatar/anh3.jpg' },
        { user: 'Viewer', text: 'Xem mà khóc hết nước mắt.', date: '2025-11-02', avatar: 'assets/avatar/anh6.jpg' }
      ]
    },
    {
      id: 3,
      title: "Oggy and the Cockroaches: The Movie",
      year: 2013,
      genres: ["Hoạt hình", "Hài", "Thiếu nhi"],
      poster: "assets/oggy.jpg",
      description: "Mèo Oggy và mấy con gián quậy phá.",
      director: "Olivier Jean-Marie",
      cast: ["Greg Eagles"],
      rating: 6.6,
      views: 4200,
      youtube: "",
      user_rating: 0,
      likes: 50,
      dislikes: 20,
      comments: [
          { user: 'KidZone', text: 'Haha, xem đi xem lại vẫn buồn cười!', date: '2025-10-15', avatar: 'assets/avatar/anh5.jpg' },
          { user: 'Parent', text: 'Con mình thích phim này lắm.', date: '2025-10-16', avatar: 'assets/avatar/anh7.jpg' }
      ]
    },
    {
      id: 4,
      title: "Tom and Jerry: The Movie",
      year: 2021,
      genres: ["Hoạt hình", "Hài", "Gia đình"],
      poster: "assets/tomandjerry.jpg",
      description: "Tom vs Jerry ở NY.",
      director: "Tim Story",
      cast: ["Chloë Grace"],
      rating: 5.9,
      views: 3300,
      youtube: "",
      user_rating: 0,
      likes: 65,
      dislikes: 30,
      comments: [
          { user: 'CartoonFan', text: 'Tuổi thơ ùa về!', date: '2025-09-20', avatar: 'assets/avatar/anh6.jpg' },
          { user: 'Critic', text: 'Bản live-action này không hay lắm.', date: '2025-09-21', avatar: 'assets/avatar/anh8.jpg' }
      ]
    },
    {
      id: 5,
      title: "Tấm Cám: Chuyện Chưa Kể",
      year: 2016,
      genres: ["Cổ tích", "Phim Việt", "Giả tưởng"],
      poster: "assets/tamcam.jpg",
      description: "Phiên bản hiện đại của truyện cổ tích Việt Nam.",
      director: "Ngô Thanh Vân",
      cast: ["Hạ Vi"],
      rating: 6.9,
      views: 5200,
      youtube: "",
      user_rating: 0,
      likes: 90,
      dislikes: 10,
      comments: [
          { user: 'MovieLover', text: 'Kỹ xảo Việt Nam ngày càng tiến bộ.', date: '2025-08-11', avatar: 'assets/avatar/anh7.jpg' },
          { user: 'FanViet', text: 'Nội dung sáng tạo!', date: '2025-08-12', avatar: 'assets/avatar/anh9.jpg' }
      ]
    },
    {
      id: 6,
      title: "Doctor Strange in the Multiverse of Madness",
      year: 2022,
      genres: ["Hành động", "Viễn tưởng", "Marvel"],
      poster: "assets/doctorstrange.jpg",
      description: "Doctor Strange du hành đa vũ trụ.",
      director: "Sam Raimi",
      cast: ["Benedict"],
      rating: 6.8,
      views: 15000,
      youtube: "https://www.youtube.com/embed/aWzlQ2N6qqg",
      user_rating: 0,
      likes: 300,
      dislikes: 15,
      comments: [
          { user: 'MarvelFanatic', text: 'Wanda đỉnh quá!', date: '2025-10-22', avatar: 'assets/avatar/anh8.jpg' },
          { user: 'Cinephile', text: 'Phần này hơi kinh dị nhưng hay.', date: '2025-10-23', avatar: 'assets/avatar/anh9.jpg' },
          { user: 'Viewer', text: 'Xem xong thấy hơi chóng mặt vì đa vũ trụ.', date: '2025-10-24', avatar: 'assets/avatar/anh1.jpg'}
      ]
    },
    {
      id: 7,
      title: "Encanto",
      year: 2021,
      genres: ["Hoạt hình", "Âm nhạc", "Kỳ ảo"],
      poster: "assets/encanto.jpg",
      description: "Mirabel trong gia đình phép thuật.",
      director: "Byron Howard",
      cast: ["Stephanie"],
      rating: 7.2,
      views: 7200,
      youtube: "",
      user_rating: 0,
      likes: 120,
      dislikes: 8,
      comments: [
          { user: 'DisneyDreamer', text: 'Nhạc phim hay xuất sắc!', date: '2025-07-05', avatar: 'assets/avatar/anh10.jpg' },
          { user: 'FamilyMan', text: 'Phim về tình cảm gia đình rất cảm động.', date: '2025-07-06', avatar: 'assets/avatar/anh2.jpg'}
      ]
    },
    {
      id: 8,
      title: "Avengers: Endgame",
      year: 2019,
      genres: ["Hành động", "Viễn tưởng", "Marvel"],
      poster: "assets/endgame.jpg",
      description: "Avengers tập hợp để đảo ngược thảm họa.",
      director: "Russo",
      cast: ["Robert Downey Jr."],
      rating: 8.4,
      views: 18500,
      youtube: "https://www.youtube.com/embed/TcMBFSGVi1c",
      user_rating: 0,
      likes: 500,
      dislikes: 20,
      comments: [
        { user: 'Admin', text: 'Đây là bộ phim hay nhất mọi thời đại!', date: '2025-10-15', avatar: 'assets/avatar/anh4.jpg' },
        { user: 'IronManFan', text: 'I am Iron Man!', date: '2025-10-16', avatar: 'assets/avatar/anh3.jpg'},
        { user: 'CaptainFan', text: 'Avengers Assemble!', date: '2025-10-17', avatar: 'assets/avatar/anh5.jpg'}
      ]
    },
    {
      id: 9,
      title: "Turning Red",
      year: 2022,
      genres: ["Hoạt hình", "Hài", "Gia đình"],
      poster: "assets/turningred.jpg",
      description: "Mei Lee hóa gấu trúc đỏ.",
      director: "Domee Shi",
      cast: ["Rosalie"],
      rating: 7.0,
      views: 6100,
      youtube: "",
      user_rating: 0,
      likes: 80,
      dislikes: 5,
      comments: [
          { user: 'PixarFan', text: 'Phim dễ thương, ý nghĩa về tuổi dậy thì.', date: '2025-09-18', avatar: 'assets/avatar/anh1.jpg' },
          { user: 'MomOfTeen', text: 'Xem phim này cùng con gái rất hay.', date: '2025-09-19', avatar: 'assets/avatar/anh6.jpg'}
      ]
    },
    {
      id: 10,
      title: "Gái Già Lắm Chiêu V",
      year: 2021,
      genres: ["Tâm lý", "Hài", "Phim Việt"],
      poster: "assets/gaigialamchieu.jpg",
      description: "Bí mật và tham vọng trong giới thượng lưu.",
      director: "Bảo Nhân",
      cast: ["Kaity Nguyễn"],
      rating: 6.7,
      views: 4800,
      youtube: "",
      user_rating: 0,
      likes: 45,
      dislikes: 3,
      comments: [
          { user: 'Fashionista', text: 'Xem phim chủ yếu vì thời trang thôi.', date: '2025-06-30', avatar: 'assets/avatar/anh2.jpg' },
          { user: 'Reviewer', text: 'Nội dung hơi rối.', date: '2025-07-01', avatar: 'assets/avatar/anh7.jpg'}
      ]
    },
    {
      id: 11,
      title: "Inception",
      year: 2010,
      genres: ["Viễn tưởng", "Hành động", "Giật gân"],
      poster: "assets/inception.jpg",
      description: "Một tên trộm chuyên đánh cắp thông tin bằng cách xâm nhập vào tiềm thức của người khác.",
      director: "Christopher Nolan",
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
      rating: 8.8,
      views: 17500,
      youtube: "https://www.youtube.com/embed/YoHD9XEInc0",
      user_rating: 0,
      likes: 700,
      dislikes: 15,
      comments: [
          { user: 'MindBlown', text: 'Phim hack não thực sự!', date: '2025-10-01', avatar: 'assets/avatar/anh3.jpg' },
          { user: 'NolanFan', text: 'Đỉnh cao của Nolan.', date: '2025-10-02', avatar: 'assets/avatar/anh8.jpg'}
      ]
    },
    {
      id: 12,
      title: "Mắt Biếc",
      year: 2019,
      genres: ["Lãng mạn", "Chính kịch", "Phim Việt"],
      poster: "assets/matbiec.jpg",
      description: "Câu chuyện tình đơn phương của Ngạn dành cho Hà Lan, cô bạn có đôi mắt biếc.",
      director: "Victor Vũ",
      cast: ["Trần Nghĩa", "Trúc Anh"],
      rating: 7.4,
      views: 8200,
      youtube: "https://www.youtube.com/embed/ITl-B5-g82E",
      user_rating: 0,
      likes: 350,
      dislikes: 20,
      comments: [
          { user: 'RomanticSoul', text: 'Xem phim mà buồn man mác.', date: '2025-05-15', avatar: 'assets/avatar/anh4.jpg' },
          { user: 'BookLover', text: 'Truyện hay hơn phim một chút.', date: '2025-05-16', avatar: 'assets/avatar/anh9.jpg'}
      ]
    },
    {
      id: 13,
      title: "The Dark Knight",
      year: 2008,
      genres: ["Hành động", "Tội phạm", "DC Comics"],
      poster: "assets/darkknight.jpg",
      description: "Batman đối đầu với kẻ thù tâm thần Joker, kẻ muốn nhấn chìm Gotham trong hỗn loạn.",
      director: "Christopher Nolan",
      cast: ["Christian Bale", "Heath Ledger"],
      rating: 9.0,
      views: 21000,
      youtube: "https://www.youtube.com/embed/EXeTwQWrcwY",
      user_rating: 0,
      likes: 950,
      dislikes: 10,
      comments: [
          { user: 'WhySoSerious', text: 'Heath Ledger vai Joker đỉnh của chóp!', date: '2025-10-25', avatar: 'assets/avatar/anh5.jpg' },
          { user: 'DCFan', text: 'Phim siêu anh hùng hay nhất mọi thời đại.', date: '2025-10-26', avatar: 'assets/avatar/anh10.jpg'}
      ]
    },
    {
      id: 14,
      title: "Hai Phượng",
      year: 2019,
      genres: ["Hành động", "Võ thuật", "Phim Việt"],
      poster: "assets/haiphuong.jpg",
      description: "Hành trình nghẹt thở của một người mẹ đi tìm đứa con gái bị bắt cóc.",
      director: "Lê Văn Kiệt",
      cast: ["Ngô Thanh Vân", "Phan Thanh Nhiên"],
      rating: 7.0,
      views: 6900,
      youtube: "",
      user_rating: 0,
      likes: 210,
      dislikes: 18,
      comments: [
          { user: 'ActionFanVN', text: 'Đả nữ Ngô Thanh Vân quá ngầu!', date: '2025-03-10', avatar: 'assets/avatar/anh6.jpg' },
          { user: 'ProudViet', text: 'Phim hành động Việt Nam chất lượng quốc tế.', date: '2025-03-11', avatar: 'assets/avatar/anh1.jpg'}
      ]
    },
    {
      id: 15,
      title: "Parasite (Ký Sinh Trùng)",
      year: 2019,
      genres: ["Chính kịch", "Giật gân", "Hài đen"],
      poster: "assets/parasite.jpg",
      description: "Một gia đình nghèo lên kế hoạch để thâm nhập vào cuộc sống của một gia đình giàu có.",
      director: "Bong Joon-ho",
      cast: ["Song Kang-ho", "Lee Sun-kyun"],
      rating: 8.6,
      views: 14300,
      youtube: "https://www.youtube.com/embed/5xH0HfJHsaY",
      user_rating: 0,
      likes: 620,
      dislikes: 8,
      comments: [
          { user: 'FilmBuff', text: 'Phim Hàn Quốc đỉnh cao, xứng đáng Oscar!', date: '2025-09-01', avatar: 'assets/avatar/anh7.jpg' },
          { user: 'ArtHouse', text: 'Nhiều ẩn dụ sâu sắc.', date: '2025-09-02', avatar: 'assets/avatar/anh2.jpg'}
      ]
    },
    {
      id: 16,
      title: "Cua Lại Vợ Bầu",
      year: 2019,
      genres: ["Lãng mạn", "Hài", "Phim Việt"],
      poster: "assets/cualai.jpg",
      description: "Một anh chàng tìm cách giành lại bạn gái cũ sau khi cô đột ngột mang thai.",
      director: "Nhất Trung",
      cast: ["Trấn Thành", "Ninh Dương Lan Ngọc"],
      rating: 6.5,
      views: 7100,
      youtube: "",
      user_rating: 0,
      likes: 150,
      dislikes: 35,
      comments: [
          { user: 'GiaDinhLaSo1', text: 'Xem giải trí cũng ổn.', date: '2025-02-14', avatar: 'assets/avatar/anh8.jpg' },
          { user: 'CoupleGoals', text: 'Phim hài hước, lãng mạn.', date: '2025-02-15', avatar: 'assets/avatar/anh3.jpg'}
      ]
    },
    {
      id: 17,
      title: "Spirited Away (Vùng Đất Linh Hồn)",
      year: 2001,
      genres: ["Hoạt hình", "Phiêu lưu", "Kỳ ảo"],
      poster: "assets/spirited.jpg",
      description: "Cô bé Chihiro lạc vào một thế giới linh hồn và phải làm việc để cứu cha mẹ mình.",
      director: "Hayao Miyazaki",
      cast: ["Rumi Hiiragi", "Miyu Irino"],
      rating: 8.6,
      views: 13800,
      youtube: "https://www.youtube.com/embed/ByXuk9QqQkk",
      user_rating: 0,
      likes: 550,
      dislikes: 5,
      comments: [
          { user: 'AnimeMaster', text: 'Một kiệt tác của Ghibli!', date: '2025-10-10', avatar: 'assets/avatar/anh9.jpg' },
          { user: 'FantasyWorld', text: 'Thế giới trong phim thật kỳ diệu.', date: '2025-10-11', avatar: 'assets/avatar/anh4.jpg'}
      ]
    },
    {
      id: 18,
      title: "Lật Mặt 6: Tấm Vé Định Mệnh",
      year: 2023,
      genres: ["Hành động", "Giật gân", "Phim Việt"],
      poster: "assets/latmat6.jpg",
      description: "Một nhóm bạn trúng số độc đắc, nhưng tấm vé lại nằm trong tay người bạn đã chết.",
      director: "Lý Hải",
      cast: ["Lý Hải", "Quốc Cường", "Huy Khánh"],
      rating: 7.2,
      views: 9500,
      youtube: "",
      user_rating: 0,
      likes: 400,
      dislikes: 22,
      comments: [
          { user: 'LyHaiFan', text: 'Phần này gay cấn, nhiều cú twist!', date: '2025-04-30', avatar: 'assets/avatar/anh10.jpg' },
          { user: 'VNMovieFan', text: 'Ủng hộ phim Việt!', date: '2025-05-01', avatar: 'assets/avatar/anh5.jpg'}
      ]
    },
    {
      id: 19,
      title: "John Wick: Chapter 4",
      year: 2023,
      genres: ["Hành động", "Giật gân", "Tội phạm"],
      poster: "assets/johnwick4.jpg",
      description: "John Wick chiến đấu chống lại High Table để giành lấy tự do của mình.",
      director: "Chad Stahelski",
      cast: ["Keanu Reeves", "Donnie Yen"],
      rating: 7.8,
      views: 16200,
      youtube: "https://www.youtube.com/embed/qEVUogcf7Ag",
      user_rating: 0,
      likes: 680,
      dislikes: 19,
      comments: [
          { user: 'GunFuGuy', text: 'Hành động mãn nhãn từ đầu đến cuối!', date: '2025-08-20', avatar: 'assets/avatar/anh1.jpg' },
          { user: 'KeanuLover', text: 'Keanu Reeves vẫn đỉnh như ngày nào!', date: '2025-08-21', avatar: 'assets/avatar/anh6.jpg'}
      ]
    },
    {
      id: 20,
      title: "Tiệc Trăng Máu",
      year: 2020,
      genres: ["Chính kịch", "Hài đen", "Phim Việt"],
      poster: "assets/tiectrangmau.jpg",
      description: "Một nhóm bạn thân chơi trò công khai mọi tin nhắn, cuộc gọi trong bữa tối.",
      director: "Nguyễn Quang Dũng",
      cast: ["Thái Hòa", "Hồng Ánh", "Thu Trang"],
      rating: 7.5,
      views: 8800,
      youtube: "",
      user_rating: 0,
      likes: 310,
      dislikes: 14,
      comments: [
          { user: 'DramaQueen', text: 'Xem xong trầm cảm nhẹ :)', date: '2025-01-01', avatar: 'assets/avatar/anh2.jpg' },
          { user: 'Thinker', text: 'Phim đặt ra nhiều vấn đề đáng suy ngẫm về mối quan hệ.', date: '2025-01-02', avatar: 'assets/avatar/anh7.jpg'}
      ]
    }
];
// === KẾT THÚC ĐỊNH DẠNG LẠI (CODE 05) ===

/* --- Danh sách Avatar (10 ảnh mẫu) --- */
const avatarList = Array.from({length: 10}, (_, i) => `assets/avatar/anh${i + 1}.jpg`);

/* --- DOM --- */
const moviesGrid = document.getElementById('moviesGrid');
const genresContainer = document.getElementById('genresContainer');
const searchInput = document.getElementById('searchInput');
const movieModal = document.getElementById('movieModal');
const modalBody = document.getElementById('modalBody'); // Vẫn là container cho phần thông tin chính
const interactionSection = document.getElementById('interactionSection'); // DOM MỚI
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.getElementById('modalOverlay');
const themeSwitch = document.getElementById('themeSwitch');
const resultCount = document.getElementById('resultCount');
const quickTabs = document.getElementById('quickTabs');
const heroInner = document.getElementById('heroInner');
const prevHero = document.getElementById('prevHero');
const nextHero = document.getElementById('nextHero');
const sortSelect = document.getElementById('sortSelect');
const ratingFilter = document.getElementById('ratingFilter');
const gridViewBtn = document.getElementById('gridView');
const listViewBtn = document.getElementById('listView');
const clearSearch = document.getElementById('clearSearch');
const viewFavoritesBtn = document.getElementById('viewFavorites');
const homeButton = document.getElementById('homeButton'); // DOM MỚI

// DOM CHO FILTER GENRE MODAL (Dự án 02)
const toggleGenreModalBtn = document.getElementById('toggleGenreModal');
const genreFilterModal = document.getElementById('genreFilterModal');
const genreModalClose = document.getElementById('genreModalClose');
const genreModalOverlay = document.getElementById('genreModalOverlay');
const genreModalContent = document.getElementById('genreModalContent');
const applyGenreFilterBtn = document.getElementById('applyGenreFilter');
const clearGenreFilterBtn = document.getElementById('clearGenreFilter');

// DOM CHO FILTER YEAR MODAL (Dự án 03)
const toggleYearModalBtn = document.getElementById('toggleYearModal');
const yearFilterModal = document.getElementById('yearFilterModal');
const yearModalClose = document.getElementById('yearModalClose');
const yearModalOverlay = document.getElementById('yearModalOverlay');
const modalYearMin = document.getElementById('modalYearMin');
const modalYearMax = document.getElementById('modalYearMax');
const applyYearFilterBtn = document.getElementById('applyYearFilter');
const clearYearFilterBtn = document.getElementById('clearYearFilter');
const yearFilterStatus = document.getElementById('yearFilterStatus');
const quickYearSelectors = document.getElementById('quickYearSelectors');

// DOM CHO RANKING MODAL (Dự án 03)
const rankingWeekBtn = document.getElementById('rankingWeek');
const rankingDayBtn = document.getElementById('rankingDay');
const rankingModal = document.getElementById('rankingModal');
const rankingModalClose = document.getElementById('rankingModalClose');
const rankingModalOverlay = document.getElementById('rankingModalOverlay');
const rankingModalTitle = document.getElementById('rankingModalTitle');
const rankingListContainer = document.getElementById('rankingListContainer');

// DOM MỚI CHO PROFILE (CODE 01)
const profileWidgetContainer = document.getElementById('profileWidgetContainer');
// const openProfileModalBtn = document.getElementById('openProfileModalBtn'); // Sẽ được lấy động
const profileModal = document.getElementById('profileModal');
const profileModalClose = document.getElementById('profileModalClose');
const profileModalOverlay = document.getElementById('profileModalOverlay');
const profileNameInput = document.getElementById('profileNameInput');
const profileAvatarGrid = document.getElementById('profileAvatarGrid');
const saveProfileBtn = document.getElementById('saveProfileBtn');
// KẾT THÚC DOM MỚI


let state = {
  filterQuery: '',
  selectedGenres: [],
  sortBy: 'popular',
  ratingMin: 0,
  yearFrom: null,
  yearTo: null,
  viewMode: 'grid',
  favorites: JSON.parse(localStorage.getItem('cine:favorites') || '[]'),
  page: 1,
  // === THAY ĐỔI (CODE 09): Tăng số phim mỗi trang ===
  perPage: 15,
  // === KẾT THÚC (CODE 09) ===
  heroIndex: 0
};
let allGenres = {};
let selectedAvatarPath = null; // BIẾN MỚI (CODE 01)

/* --- TƯƠNG TÁC PERSISTENCE (LƯU TRỮ) - CẬP NHẬT TỪ CODE 05: Thêm Avatar --- */

// Tải tên người dùng và avatar
function loadUserProfile() {
    const name = localStorage.getItem('cine:username') || null;
    const avatar = localStorage.getItem('cine:useravatar') || null;
    return { name, avatar };
}

// Lưu tên người dùng và avatar
function saveUserProfile(name, avatar) {
    if (name && name.trim()) {
        localStorage.setItem('cine:username', name.trim());
        userName = name.trim();
    } else {
        localStorage.removeItem('cine:username');
        userName = null;
    }

    if (avatar && avatar.trim()) {
        localStorage.setItem('cine:useravatar', avatar.trim());
        userAvatar = avatar.trim();
    } else {
        localStorage.removeItem('cine:useravatar');
        userAvatar = null;
    }
    return userName && userAvatar;
}

// Tải dữ liệu tương tác từ localStorage, nếu không có thì trả về object rỗng
function loadInteractions() {
  try {
    const json = localStorage.getItem('cine:user_interactions');
    return json ? JSON.parse(json) : {};
  } catch (e) {
    console.error("Lỗi khi tải tương tác:", e);
    return {};
  }
}

// Lưu dữ liệu tương tác vào localStorage
function saveInteractions(interactions) {
  try {
    localStorage.setItem('cine:user_interactions', JSON.stringify(interactions));
  } catch (e) {
    console.error("Lỗi khi lưu tương tác:", e);
  }
}

let userInteractions = loadInteractions(); // Tải khi khởi động
let { name: userName, avatar: userAvatar } = loadUserProfile(); // <<== Tải hồ sơ người dùng

// === CẬP NHẬT HÀM mergeInteractions (CODE 10) ===
// Hàm hợp nhất dữ liệu mặc định và dữ liệu đã lưu
function mergeInteractions() {
  let needsSave = false; // Biến cờ để kiểm tra xem có cần lưu lại localStorage không

  movies.forEach(movie => {
    const saved = userInteractions[movie.id];
    let currentComments = movie.comments.slice(); // Lấy comment mẫu từ code làm gốc

    // Gán avatar ngẫu nhiên cho comment mẫu nếu thiếu
    currentComments.forEach(comment => {
        if (!comment.avatar) {
            comment.avatar = avatarList[Math.floor(Math.random() * avatarList.length)];
            needsSave = true; // Đánh dấu cần lưu vì đã sửa comment mẫu
        }
    });

    if (saved) {
      // Nếu có dữ liệu đã lưu trong localStorage
      movie.user_rating = saved.user_rating !== undefined ? saved.user_rating : movie.user_rating;

      // === THAY ĐỔI (CODE 02): Sửa lỗi logic. Thêm 2 dòng này để merge 'likes' và 'dislikes' đã lưu
      movie.likes = saved.likes !== undefined ? saved.likes : movie.likes;
      movie.dislikes = saved.dislikes !== undefined ? saved.dislikes : movie.dislikes;
      // === KẾT THÚC (CODE 02) ===

      movie.user_voted = saved.user_voted !== undefined ? saved.user_voted : null;

      // Ưu tiên comment đã lưu nếu nó không rỗng
      // Hoặc nếu số lượng comment mẫu nhiều hơn (nghĩa là code mới thêm vào) thì dùng comment mẫu
      if (saved.comments && saved.comments.length > 0 && saved.comments.length >= currentComments.length) {
          currentComments = saved.comments;
      } else if (currentComments.length > (saved.comments ? saved.comments.length : 0) ) {
          // Nếu comment mẫu nhiều hơn comment đã lưu (có thể do cập nhật code)
          needsSave = true; // Cần lưu lại vì dùng comment mẫu mới hơn
      }
      // Gán avatar ngẫu nhiên cho các comment đã lưu mà bị thiếu avatar
      currentComments.forEach(comment => {
        if (!comment.avatar) {
            comment.avatar = avatarList[Math.floor(Math.random() * avatarList.length)];
            needsSave = true; // Đánh dấu cần lưu
        }
      });

    } else {
        // Nếu phim này chưa có trong localStorage, nghĩa là cần lưu comment mẫu ban đầu
        needsSave = true;
    }

    // Cập nhật lại mảng movies với comment đã được hợp nhất/sửa lỗi avatar
    movie.comments = currentComments;

    // Cập nhật hoặc khởi tạo userInteractions cho phim này
    // Giờ đây 'movie.likes' và 'movie.dislikes' đã là dữ liệu đúng (đã merge)
    userInteractions[movie.id] = {
        user_rating: movie.user_rating,
        likes: movie.likes,
        dislikes: movie.dislikes,
        comments: movie.comments.slice(), // Luôn sao chép mảng comments mới nhất
        user_voted: movie.user_voted || null
    };
  });

  // Chỉ lưu lại localStorage nếu có sự thay đổi (thêm comment mẫu, sửa avatar thiếu)
  if (needsSave) {
    saveInteractions(userInteractions);
  }
}
// === KẾT THÚC CẬP NHẬT mergeInteractions (CODE 10) ===


/* --- Init --- */
document.addEventListener('DOMContentLoaded', () => {
  mergeInteractions(); // <<== GỌI HỢP NHẤT DỮ LIỆU ĐÃ LƯU TRƯỚC KHI KHỞI TẠO UI
  initTheme();
  renderProfileWidget(); // MỚI (CODE 01)
  initProfileModal(); // MỚI (CODE 01)
  prepareGenres();
  prepareYearFilters(); // Dự án 03
  renderHero();
  applyFiltersAndRender();
  attachEvents();

   // === THÊM MỚI (CODE 20): Init Music Player ===
  if (musicPlaylist.length > 0) {
      renderPlaylist(); // === THÊM MỚI (CODE 02): Render danh sách nhạc
      loadTrack(currentTrackIndex);
      // === THAY ĐỔI (CODE 01): Tự động phát nhạc khi tải trang ===
      // (Lưu ý: Có thể bị trình duyệt chặn)
      playTrack();
      // === KẾT THÚC (CODE 01) ===
  } else {
      currentSongTitle.textContent = "Không có bài hát";
      // Vô hiệu hóa các nút nếu không có nhạc
      if(playPauseBtn) playPauseBtn.disabled = true; // Thêm kiểm tra tồn tại
      if(prevBtn) prevBtn.disabled = true;
      if(nextBtn) nextBtn.disabled = true;
      if(seekBar) seekBar.disabled = true; // (CODE 24) Vô hiệu hóa seek bar nếu không có nhạc
  }
  // === KẾT THÚC (CODE 20) ===

});

/* --- Theme --- */
function initTheme(){
  // ... (Giữ nguyên)
  const saved = localStorage.getItem('cine:theme') || 'dark';
  if(saved === 'light') document.body.classList.add('light');
  themeSwitch.checked = saved === 'light' ? true : false;
}
themeSwitch.addEventListener('change', ()=>{
  // ... (Giữ nguyên)
  if(document.body.classList.contains('light')){
    document.body.classList.remove('light');
    localStorage.setItem('cine:theme','dark');
  } else {
    document.body.classList.add('light');
    localStorage.setItem('cine:theme','light');
  }
});

/* --- TÀI KHOẢN (PROFILE) WIDGET (MỚI - CODE 01) --- */
function renderProfileWidget() {
    if (userName && userAvatar) {
        // Đã đăng nhập
        profileWidgetContainer.innerHTML = `
            <h3>Tài khoản</h3>
            <div class="profile-widget">
                <img src="${userAvatar}" alt="Avatar">
                <div class="profile-info">
                    <div class="name">${escapeHtml(userName)}</div>
                    <span class="logout" id="logoutBtn">Đăng xuất</span>
                </div>
            </div>
        `;
        profileWidgetContainer.querySelector('#logoutBtn').addEventListener('click', () => {
            if (confirm('Bạn có chắc muốn đăng xuất?')) {
                saveUserProfile(null, null); // Xóa profile
                renderProfileWidget(); // Render lại
                // (Tùy chọn) Nếu đang ở trong modal phim, đóng nó lại hoặc render lại
                if (!movieModal.classList.contains('hidden')) {
                    const currentMovieId = document.querySelector('.rating-stars')?.dataset.movieId;
                    if(currentMovieId) {
                        const movie = movies.find(m => m.id === Number(currentMovieId));
                        if(movie) renderInteractionSection(movie); // Render lại để hiển thị thông báo "đăng nhập"
                    }
                }
            }
        });
    } else {
        // Chưa đăng nhập
        profileWidgetContainer.innerHTML = `
            <h3>Tài khoản</h3>
            <button id="openProfileModalBtn" class="btn filter-toggle">Đăng nhập / Tạo tài khoản</button>
        `;
        profileWidgetContainer.querySelector('#openProfileModalBtn').addEventListener('click', openProfileModal);
    }
}

function initProfileModal() {
    // Điền lưới avatar
    profileAvatarGrid.innerHTML = '';
    avatarList.forEach(avatarPath => {
        const img = document.createElement('img');
        img.src = avatarPath;
        img.dataset.path = avatarPath;
        img.className = 'avatar-option-item';
        img.alt = 'Avatar';
        img.addEventListener('click', () => {
            profileAvatarGrid.querySelectorAll('.avatar-option-item').forEach(i => i.classList.remove('selected'));
            img.classList.add('selected');
            selectedAvatarPath = img.dataset.path; // Lưu avatar đã chọn
        });
        profileAvatarGrid.appendChild(img);
    });

    // Gắn sự kiện
    // (Nút mở modal đã được gắn trong renderProfileWidget)
    profileModalClose.addEventListener('click', closeProfileModal);
    profileModalOverlay.addEventListener('click', closeProfileModal);

    saveProfileBtn.addEventListener('click', () => {
        const newName = profileNameInput.value.trim();
        if (!newName) {
            alert('Vui lòng nhập tên của bạn.');
            return;
        }
        if (!selectedAvatarPath) {
            alert('Vui lòng chọn một avatar.');
            return;
        }

        // Lưu profile
        saveUserProfile(newName, selectedAvatarPath);

        // Cập nhật UI
        renderProfileWidget();
        closeProfileModal();

        // (Quan trọng) Nếu đang ở trong modal phim, render lại interaction
        if (!movieModal.classList.contains('hidden')) {
            // Lấy ID phim từ một element bất kỳ trong interaction section
            // (Chúng ta sẽ đảm bảo gán data-movie-id cho rating-stars)
            const ratingStars = document.querySelector('.rating-stars');
            if(ratingStars) {
                 const currentMovieId = ratingStars.dataset.movieId;
                 if(currentMovieId) {
                    const movie = movies.find(m => m.id === Number(currentMovieId));
                    if(movie) renderInteractionSection(movie);
                 }
            } else {
                 // Nếu ratingStars không tồn tại (vì người dùng chưa login),
                 // chúng ta cần tìm ID phim bằng cách khác.
                 // Tuy nhiên, logic hiện tại là renderInteractionSection sẽ chạy lại,
                 // nên chúng ta cần tìm ID từ modalBody.
                 const favButton = document.getElementById('modalFav');
                 // (Đây là một cách dự phòng, cách tốt nhất là renderInteractionSection tự chạy)
                 // Thôi, cứ để logic renderInteractionSection chạy lại sau khi đăng nhập là đủ.
            }

            // Đoạn code này chạy lại renderInteractionSection cho modal đang mở
            const modalInteractionSection = document.getElementById('interactionSection');
            const movieId = modalInteractionSection.dataset.currentMovieId;
            if (movieId) {
                const movie = movies.find(m => m.id === Number(movieId));
                if (movie) renderInteractionSection(movie);
            }
        }
    });
}

function openProfileModal() {
    // Reset
    profileNameInput.value = userName || '';
    selectedAvatarPath = userAvatar || null;

    // Đặt lại trạng thái 'selected'
    profileAvatarGrid.querySelectorAll('.avatar-option-item').forEach(img => {
        if (img.dataset.path === selectedAvatarPath) {
            img.classList.add('selected');
        } else {
            img.classList.remove('selected');
        }
    });

    profileModal.classList.remove('hidden');
    profileModal.setAttribute('aria-hidden', 'false');
}

function closeProfileModal() {
    profileModal.classList.add('hidden');
    profileModal.setAttribute('aria-hidden', 'true');
}
/* --- KẾT THÚC PHẦN PROFILE (CODE 01) --- */


/* --- Genres (Dự án 02) --- */
function prepareGenres(){
  // ... (Giữ nguyên)
  const genreCounts = {};
  movies.forEach(m => m.genres.forEach(g => {
    genreCounts[g] = (genreCounts[g] || 0) + 1;
  }));
  const sortedGenres = Object.keys(genreCounts).sort();
  sortedGenres.forEach(genre => {
    allGenres[genre] = genreCounts[genre];
  });
  renderGenreCheckboxes();
}

function renderGenreCheckboxes(){
  // ... (Giữ nguyên)
  genreModalContent.innerHTML = '';
  Object.keys(allGenres).forEach((genre, idx) => {
    const id = `genre-${idx}`;
    const count = allGenres[genre];
    const isChecked = state.selectedGenres.includes(genre) ? 'checked' : '';

    // Cập nhật để hiển thị (Thể loại (Số lượng) ■)
    const label = document.createElement('label');
    label.className = 'genre-item';
    label.innerHTML = `<input type="checkbox" value="${genre}" id="${id}" ${isChecked} /> <span>${genre} (${count}) <span style="font-weight:700; color:var(--accent);">${isChecked ? '■' : '□'}</span></span>`;
    genreModalContent.appendChild(label);
  });
  // ----------------------------------------
}
function openGenreModal() {
    renderGenreCheckboxes();
    genreFilterModal.classList.remove('hidden');
    genreFilterModal.setAttribute('aria-hidden', 'false');
}
function closeGenreModal() {
    genreFilterModal.classList.add('hidden');
    genreFilterModal.setAttribute('aria-hidden', 'true');
}

/* --- Year Filter (Dự án 03) --- */
function prepareYearFilters(){
  // ... (Giữ nguyên)
  const years = movies.map(m=>m.year).filter(y=>y);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  modalYearMin.placeholder = `Từ ${minYear}`;
  modalYearMax.placeholder = `Đến ${maxYear}`;

  renderQuickYearSelectors(minYear, maxYear);
  updateYearFilterStatus();
}

function renderQuickYearSelectors(min, max){
    // ... (Giữ nguyên)
    quickYearSelectors.innerHTML = '';
    const quickYears = [max, max-1, max-2, max-5, max-10, min].filter((y, i, arr) => arr.indexOf(y) === i).sort((a,b)=>b-a);

    quickYears.forEach(year => {
        const btn = document.createElement('button');
        btn.className = 'btn small year-quick-select';
        btn.textContent = year;
        btn.addEventListener('click', () => {
            modalYearMin.value = year;
            modalYearMax.value = year;
            updateYearFilterStatus();
        });
        quickYearSelectors.appendChild(btn);
    });
}

function updateYearFilterStatus(){
    // ... (Giữ nguyên)
    const min = state.yearFrom || modalYearMin.value;
    const max = state.yearTo || modalYearMax.value;
    const statusText = (min || max) ?
        `Đã chọn: ${min ? min : 'Mọi năm'} - ${max ? max : 'Mọi năm'}` :
        'Đã chọn: Mọi năm';
    yearFilterStatus.textContent = statusText;
    toggleYearModalBtn.textContent = statusText;
}

function openYearModal() {
    // ... (Giữ nguyên)
    modalYearMin.value = state.yearFrom || '';
    modalYearMax.value = state.yearTo || '';
    updateYearFilterStatus();
    yearFilterModal.classList.remove('hidden');
    yearFilterModal.setAttribute('aria-hidden', 'false');
}
function closeYearModal() {
    // ... (Giữ nguyên)
    yearFilterModal.classList.add('hidden');
    yearFilterModal.setAttribute('aria-hidden', 'true');
}

/* --- Ranking Modal (Dự án 03) --- */
// === CẬP NHẬT calculateRankings (CODE 11) ===
function calculateRankings(type){
  let list = movies.slice();

  // Giả lập điểm xếp hạng
  list.forEach(m => {
    // Công thức cơ bản: 70% Views + 30% Rating
    let score = (m.views || 0) * 0.001 + (m.rating || 0) * 10;

    // Nếu là top ngày, thêm yếu tố ngẫu nhiên nhỏ để tạo biến động
    if (type === 'day') {
      // Thêm một giá trị ngẫu nhiên từ 0 đến 5 vào điểm
      score += Math.random() * 5;
    }
    // (Bạn có thể thêm logic khác cho 'week' nếu muốn, ví dụ giảm nhẹ yếu tố views)

    m.rankingScore = score;
  });

  list.sort((a,b) => b.rankingScore - a.rankingScore);

  return list.slice(0, 10);
}
// === KẾT THÚC CẬP NHẬT (CODE 11) ===


function renderRankings(rankings){
  // ... (Giữ nguyên)
  rankingListContainer.innerHTML = '';
  if (rankings.length === 0) {
    rankingListContainer.innerHTML = '<p style="text-align:center;">Không có dữ liệu xếp hạng.</p>';
    return;
  }

  rankings.forEach((m, index) => {
    const item = document.createElement('div');
    item.className = 'ranking-item';
    item.innerHTML = `
      <div class="rank-number">${index + 1}</div>
      <div class="rank-info">
        <div class="rank-title">${escapeHtml(m.title)} (${m.year})</div>
        <div class="rank-meta">${m.genres.join(', ')}</div>
      </div>
      <div class="rank-score">${(m.rating || 0).toFixed(1)} <span style="font-size: 12px; color: var(--muted);">⭐</span></div>
      <div class="rank-views">${m.views.toLocaleString()} <span style="font-size: 12px; color: var(--muted);">views</span></div>
    `;
    item.addEventListener('click', () => {
        closeRankingModal();
        openModal(m.id);
    });
    rankingListContainer.appendChild(item);
  });
}

function openRankingModal(type) {
    // ... (Giữ nguyên)
    const title = type === 'week' ? 'Bảng Xếp Hạng Top Tuần' : 'Bảng Xếp Hạng Top Ngày';
    rankingModalTitle.textContent = title;

    const rankings = calculateRankings(type); // Gọi hàm đã cập nhật
    renderRankings(rankings);

    rankingModal.classList.remove('hidden');
    rankingModal.setAttribute('aria-hidden', 'false');
}

function closeRankingModal(){
    // ... (Giữ nguyên)
    rankingModal.classList.add('hidden');
    rankingModal.setAttribute('aria-hidden', 'true');
}

/* --- Hero (carousel of top viewed) (Giữ nguyên) --- */
function getHeroSlides(){
  // ... (Giữ nguyên)
  return [...movies].sort((a,b)=>b.views-a.views).slice(0,4);
}
function renderHero(){
  // ... (Giữ nguyên)
  const slides = getHeroSlides();
  heroInner.innerHTML = '';
  slides.forEach((m, i) => {
    const slide = document.createElement('div');
    slide.className = 'hero-slide';
    slide.innerHTML = `<div class="info">
      <div class="hero-title">${escapeHtml(m.title)} <small style="font-weight:400;color:var(--muted)">(${m.year})</small></div>
      <p class="hero-desc">${escapeHtml(m.description)}</p>
      <div style="margin-top:12px"><button class="btn watch" data-id="${m.id}">Xem chi tiết</button></div>
    </div>
    <img src="${m.poster}" alt="${escapeHtml(m.title)} poster" />`;
    heroInner.appendChild(slide);

    slide.querySelector('.watch').addEventListener('click', (e) => {
        openModal(Number(e.target.dataset.id));
    });
  });
  updateHeroPosition();
}
function updateHeroPosition(){
  // ... (Giữ nguyên)
  const w = heroInner.children.length;
  heroInner.style.transform = `translateX(-${state.heroIndex * 100}%)`;
}
prevHero?.addEventListener('click', ()=>{ state.heroIndex = (state.heroIndex - 1 + heroInner.children.length) % heroInner.children.length; updateHeroPosition(); });
nextHero?.addEventListener('click', ()=>{ state.heroIndex = (state.heroIndex + 1) % heroInner.children.length; updateHeroPosition(); });
// Giữ nguyên carousel tự động chuyển
setInterval(()=>{ state.heroIndex = (state.heroIndex + 1) % Math.max(1, heroInner.children.length); updateHeroPosition(); }, 6000);

/* --- Filtering & rendering pipeline (Giữ nguyên) --- */
function applyFiltersAndRender(){
  // ... (Giữ nguyên)
  let list = movies.slice();

  // search
  const q = state.filterQuery.trim().toLowerCase();
  if(q) list = list.filter(m => (m.title + ' ' + m.director + ' ' + m.cast.join(' ')).toLowerCase().includes(q));

  // genres
  if(state.selectedGenres.length) list = list.filter(m => m.genres.some(g=> state.selectedGenres.includes(g)));

  // rating
  if(state.ratingMin) list = list.filter(m => (m.rating || 0) >= state.ratingMin);

  // year
  if(state.yearFrom) list = list.filter(m=> m.year >= state.yearFrom);
  if(state.yearTo) list = list.filter(m=> m.year <= state.yearTo);

  // quick tabs filters (ranking) - Không cần logic đặc biệt ở đây nữa vì sort xử lý
  // if(state.sortBy === 'trending-week' || state.sortBy === 'trending-day'){ }

  // sort
  if(state.sortBy === 'newest') list.sort((a,b)=> b.year - a.year);
  else if(state.sortBy === 'rating') list.sort((a,b)=> (b.rating||0) - (a.rating||0));
  else if(state.sortBy === 'alpha') list.sort((a,b)=> a.title.localeCompare(b.title));
  else list.sort((a,b)=> b.views - a.views); // Mặc định sort theo views (popular)

  // write count
  resultCount.textContent = list.length;

  // pagination
  const start = (state.page -1) * state.perPage;
  const pageItems = list.slice(start, start + state.perPage);

  // === THÊM MỚI (CODE 05): Thêm animation fade-in ===
  // Xóa class cũ, thêm lại để trigger animation
  moviesGrid.classList.remove('grid-fade-in');
  void moviesGrid.offsetWidth; // Một mẹo nhỏ để trình duyệt nhận diện thay đổi
  moviesGrid.classList.add('grid-fade-in');
  // === KẾT THÚC (CODE 05) ===

  renderMovies(pageItems);
  renderPagination(Math.ceil(list.length / state.perPage));
}

/* render movies (Giữ nguyên) */
function renderMovies(list){
  // ... (Giữ nguyên)
  moviesGrid.innerHTML = '';
  const tpl = document.getElementById('movieCardTpl');
  list.forEach(m=>{
    const node = tpl.content.cloneNode(true);
    const article = node.querySelector('.movie-card');
    article.dataset.id = m.id;
    const img = article.querySelector('.poster');
    img.src = m.poster;
    img.alt = m.title + ' poster';
    article.querySelector('.movie-title').textContent = m.title;
    article.querySelector('.meta.small').textContent = m.year + ' • ' + (m.director || '');
    article.querySelector('.genres.small').textContent = m.genres.join(' • ');

    // === THAY ĐỔI (CODE 07): Lấy phần tử rating và thêm class ===
    const ratingEl = article.querySelector('.rating');
    ratingEl.textContent = (m.rating ? m.rating.toFixed(1) : '—');
    ratingEl.classList.add('rainbow-text'); // Thêm class rainbow-text ở đây
    // === KẾT THÚC (CODE 07) ===

    const favBtn = article.querySelector('.fav-btn');
    favBtn.textContent = state.favorites.includes(m.id) ? '♥' : '♡';
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(m.id, favBtn);
    });

    article.addEventListener('click', ()=> openModal(m.id));
    moviesGrid.appendChild(node);
  });
}

/* pagination UI (Giữ nguyên) */
function renderPagination(pages){
  // ... (Giữ nguyên)
  const pagesWrap = document.getElementById('pages');
  pagesWrap.innerHTML = '';
  for(let i=1;i<=pages;i++){
    const b = document.createElement('button');
    b.textContent = i;
    if(i===state.page) b.classList.add('active');
    b.addEventListener('click', ()=>{ state.page = i; applyFiltersAndRender(); });
    pagesWrap.appendChild(b);
  }
  document.getElementById('prevPage').disabled = state.page === 1;
  document.getElementById('nextPage').disabled = state.page === pages;
}
document.getElementById('prevPage').addEventListener('click', ()=>{ if(state.page>1){ state.page--; applyFiltersAndRender(); }});
document.getElementById('nextPage').addEventListener('click', ()=>{ state.page++; applyFiltersAndRender(); });

/* toggle favorite (CẬP NHẬT - CODE 01) */
function toggleFavorite(id, btn){
  // KIỂM TRA ĐĂNG NHẬP (MỚI - CODE 01)
  if (!userName || !userAvatar) {
      alert('Bạn cần tạo tài khoản để sử dụng chức năng này.');
      openProfileModal(); // Mở modal đăng ký
      return;
  }
  // (Kết thúc kiểm tra)

  const idx = state.favorites.indexOf(id);
  if(idx === -1) state.favorites.push(id);
  else state.favorites.splice(idx,1);
  localStorage.setItem('cine:favorites', JSON.stringify(state.favorites));
  btn.textContent = state.favorites.includes(id) ? '♥' : '♡';

  const modalFavBtn = document.getElementById('modalFav');
  if(modalFavBtn) {
    modalFavBtn.textContent = state.favorites.includes(id) ? 'Bỏ yêu thích' : 'Thêm yêu thích';
  }
}

/* --- TƯƠNG TÁC (RATING, COMMENT, LIKE/DISLIKE) - VIẾT LẠI (CODE 02) --- */
function formatNumber(num) {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
}

function renderInteractionSection(movie) {
    interactionSection.innerHTML = '';
    // Lưu ID phim hiện tại vào DOM để dùng khi đăng nhập xong
    interactionSection.dataset.currentMovieId = movie.id;

    // === BẮT ĐẦU THAY ĐỔI LỚN (CODE 02) ===
    // 1. Gán class 'interaction-locked' nếu chưa đăng nhập
    if (!userName || !userAvatar) {
        interactionSection.classList.add('interaction-locked');
    } else {
        interactionSection.classList.remove('interaction-locked');
    }

    // 2. Luôn render các thành phần
    const userVoted = userInteractions[movie.id]?.user_voted;

    // 2.1. Rating Section
    const ratingHtml = `
        <div class="rating-section">
            <h4>Đánh giá của bạn</h4>
            <div class="user-rating">
                <h5>Cho điểm (1-5 sao)</h5>
                <div class="rating-stars" data-movie-id="${movie.id}">
                    ${[1, 2, 3, 4, 5].map(i =>
                        `<button class="star-btn ${movie.user_rating >= i ? 'rated' : ''}" data-rating="${i}">★</button>`
                    ).join('')}
                </div>
            </div>
            <h4>Tương tác</h4>
            <div class="interaction-actions">
                <button class="action-btn like-btn ${userVoted === 'like' ? 'active' : ''}" data-id="${movie.id}" data-action="like">👍 ${formatNumber(movie.likes)}</button>
                <button class="action-btn dislike-btn ${userVoted === 'dislike' ? 'active' : ''}" data-id="${movie.id}" data-action="dislike">👎 ${formatNumber(movie.dislikes)}</button>
                <button class="action-btn share-btn" data-id="${movie.id}">🔗 Share</button>
            </div>
        </div>
    `;

    // 2.2. Comment Section
    let commentFormContent;

    if (userName && userAvatar) {
        // --- Đã đăng nhập: Hiển thị form bình luận ---
        commentFormContent = `
            <div class="comment-as-info" style="margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
                <img src="${userAvatar}" alt="Avatar" style="width: 30px; height: 30px; border-radius: 50%; object-fit: cover; border: 1px solid var(--muted);" />
                <div style="font-weight: 600;">Bình luận với tên: <span style="color: var(--accent-2);">${escapeHtml(userName)}</span> (<span class="change-profile-link" style="color: var(--accent); cursor: pointer; text-decoration: underline;">Đổi tên/avatar</span>)</div>
            </div>
            <form class="comment-form" data-movie-id="${movie.id}">
                <textarea placeholder="Viết bình luận của bạn..." required></textarea>
                <button type="submit" class="btn comment-submit-btn">Đăng bình luận</button>
            </form>
        `;
    } else {
        // --- Chưa đăng nhập: Hiển thị thông báo nhỏ ---
        commentFormContent = `
            <div class="interaction-disabled-overlay small-prompt">
                <p>Vui lòng <button id="loginForCommentBtn" class="btn-link">tạo tài khoản</button> để bình luận.</p>
            </div>
        `;
    }

    // 2.3. Danh sách bình luận (luôn hiển thị)
    const commentListHtml = `
        <div class="comments-list">
            ${movie.comments.length === 0 ? '<p style="text-align: center; color: var(--muted); padding: 10px 0;">Chưa có bình luận nào.</p>' :
                movie.comments.map(c => `
                    <div class="comment-item">
                        <img src="${c.avatar}" alt="Avatar" style="width: 30px; height: 30px; border-radius: 50%; object-fit: cover; margin-right: 8px; float: left; border: 1px solid var(--muted);" />
                        <div class="comment-author">${escapeHtml(c.user)}</div>
                        <div class="comment-text">${escapeHtml(c.text)}</div>
                        <span class="comment-date">${c.date}</span>
                    </div>
                `).join('')
            }
        </div>
    `;

    const commentSectionHtml = `
        <div class="comment-section">
            <h4>Bình luận (${movie.comments.length})</h4>
            ${commentFormContent}
            ${commentListHtml}
        </div>
    `;

    interactionSection.innerHTML = ratingHtml + commentSectionHtml;

    // 3. Attach Events
    // Gắn event cho sao (sẽ bị chặn bởi hàm rateMovie nếu chưa đăng nhập)
    interactionSection.querySelectorAll('.star-btn').forEach(btn => {
        btn.addEventListener('click', (e) => rateMovie(movie.id, Number(e.currentTarget.dataset.rating)));
    });

    // Gắn event cho nút "Đăng nhập để bình luận" (nếu có)
    const loginBtn = interactionSection.querySelector('#loginForCommentBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            closeModal();
            openProfileModal();
        });
    }

    // Event cho nút Đổi tên/avatar (nếu có)
    const changeProfileLink = interactionSection.querySelector('.change-profile-link');
    if (changeProfileLink) {
        changeProfileLink.addEventListener('click', () => {
            closeModal();
            openProfileModal();
        });
    }

    // Event cho form bình luận (nếu có)
    const commentForm = interactionSection.querySelector('.comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const textarea = e.target.querySelector('textarea');
            submitComment(movie.id, textarea.value);
            textarea.value = ''; // Clear form
        });
    }

    // Gắn event cho Like/Dislike (sẽ bị chặn bởi hàm toggleLike nếu chưa đăng nhập)
    interactionSection.querySelector('.like-btn').addEventListener('click', (e) => toggleLike(movie.id, 'like'));
    interactionSection.querySelector('.dislike-btn').addEventListener('click', (e) => toggleLike(movie.id, 'dislike'));
    interactionSection.querySelector('.share-btn').addEventListener('click', () => shareMovie(movie.id, movie.title));

    // === KẾT THÚC THAY ĐỔI (CODE 02) ===
}

function rateMovie(movieId, rating) {
    // KIỂM TRA ĐĂNG NHẬP (Giữ nguyên từ CODE 01)
    if (!userName || !userAvatar) {
        alert('Bạn cần tạo tài khoản để sử dụng chức năng này.');
        closeModal();
        openProfileModal();
        return;
    }
    // (Kết thúc kiểm tra)

    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;

    // Logic giả lập: nếu đã rating, bỏ rating, nếu chưa, gán rating mới
    movie.user_rating = movie.user_rating === rating ? 0 : rating;

    // CẬP NHẬT VÀ LƯU VÀO LOCALSTORAGE
    userInteractions[movieId].user_rating = movie.user_rating;
    saveInteractions(userInteractions);

    // Tạm thời, không cập nhật rating trung bình của phim. Chỉ render lại.
    renderInteractionSection(movie);
    alert(`Bạn đã ${movie.user_rating ? 'đánh giá' : 'bỏ đánh giá'} phim ${movie.title} ${movie.user_rating ? 'với ' + movie.user_rating + ' sao' : ''}.`);
}

function submitComment(movieId, text) {
    // KIỂM TRA TÊN VÀ AVATAR (Giữ nguyên từ CODE 01)
    if (!userName || !userAvatar) {
        alert("Lỗi: Vui lòng nhập tên và chọn avatar của bạn trước khi bình luận.");
        closeModal();
        openProfileModal();
        return;
    }

    if (!text.trim()) return;
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;

    const newComment = {
        user: userName, // <<== SỬ DỤYn TÊN ĐÃ LƯU
        text: text.trim(),
        date: new Date().toLocaleDateString('vi-VN'),
        avatar: userAvatar // <<== SỬ DỤNG AVATAR ĐÃ LƯU
    };

    // Thêm bình luận vào đầu danh sách
    movie.comments.unshift(newComment);

    // CẬP NHẬT VÀ LƯU VÀO LOCALSTORAGE
    userInteractions[movieId].comments = movie.comments; // Lưu toàn bộ mảng comments
    saveInteractions(userInteractions);

    // Render lại phần tương tác để hiển thị bình luận mới
    renderInteractionSection(movie);
    alert(`Bình luận của bạn đã được đăng với tên: ${userName}`);
}

// HÀM TOGGLE LIKE MỚI (CẬP NHẬT - CODE 01)
function toggleLike(movieId, type) {
    // KIỂM TRA ĐĂNG NHẬP (Giữ nguyên từ CODE 01)
    if (!userName || !userAvatar) {
        alert('Bạn cần tạo tài khoản để sử dụng chức năng này.');
        closeModal();
        openProfileModal();
        return;
    }
    // (Kết thúc kiểm tra)

    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;

    const currentVote = userInteractions[movieId].user_voted; // like, dislike, or null
    const otherType = type === 'like' ? 'dislike' : 'like';

    if (currentVote === type) {
        // Tình huống 1: Người dùng đã vote và nhấn lại cùng nút (BỎ VOTE)
        movie[type + 's']--;
        userInteractions[movieId].user_voted = null;
    } else if (currentVote === otherType) {
        // Tình huống 2: Người dùng đã vote cho bên kia và nhấn nút ngược lại (CHUYỂN VOTE)
        movie[otherType + 's']--; // Bỏ vote cũ
        movie[type + 's']++;      // Thêm vote mới
        userInteractions[movieId].user_voted = type; // Cập nhật trạng thái
    } else {
        // Tình huống 3: Người dùng chưa vote và nhấn nút (THÊM VOTE MỚI)
        movie[type + 's']++;
        userInteractions[movieId].user_voted = type; // Cập nhật trạng thái
    }

    // CẬP NHẬT SỐ LƯỢNG VÀ TRẠNG THÁI VOTE TRONG LOCALSTORAGE
    userInteractions[movieId].likes = movie.likes;
    userInteractions[movieId].dislikes = movie.dislikes;

    saveInteractions(userInteractions);

    // Render lại để cập nhật số lượng và trạng thái active
    renderInteractionSection(movie);
}

function shareMovie(movieId, title) {
    // ... (Giữ nguyên)
    const shareUrl = window.location.href + `?movie=${movieId}`;

    if (navigator.share) {
        navigator.share({
            title: title,
            text: `Xem ngay phim ${title} trên CineVerse!`,
            url: shareUrl,
        }).then(() => console.log('Chia sẻ thành công'))
          .catch((error) => console.log('Lỗi chia sẻ', error));
    } else {
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert(`Đã sao chép đường dẫn chia sẻ phim "${title}"!`);
        });
    }
}


/* modal chi tiết (Giữ nguyên) */
function openModal(id){
  // ... (Giğ nguyên)
  const m = movies.find(x=>x.id===id);
  if(!m) return;

  let videoContent = '';
  if (m.youtube) {
    videoContent = `<div class="videoWrap"><iframe width="560" height="315" src="${m.youtube}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
  }

  modalBody.innerHTML = `
    <div class="modal-poster-wrap">
        <img class="modal-poster" src="${m.poster}" alt="${escapeHtml(m.title)}"/>
        <div class="modal-info-text">
            <h2 id="modalTitle">${escapeHtml(m.title)} <small style="font-weight:400;color:var(--muted)">(${m.year})</small></h2>
            <div class="meta">Đạo diễn: ${escapeHtml(m.director)} • Thể loại: ${m.genres.join(', ')} • Rating: <span style="color: var(--accent); font-weight: 700;">${m.rating}</span></div>
            <p>${escapeHtml(m.description)}</p>
            <h4>Diễn viên chính</h4>
            <p>${m.cast.join(', ')}</p>
            <div style="margin-top:12px">
              <button class="btn close-detail" id="modalFav">${state.favorites.includes(m.id) ? 'Bỏ yêu thích' : 'Thêm yêu thích'}</button>
            </div>
        </div>
    </div>
    ${videoContent}`;

  // RENDER PHẦN TƯƠNG TÁC MỚI (CODE 02)
  renderInteractionSection(m);

  movieModal.classList.remove('hidden');
  movieModal.setAttribute('aria-hidden','false');
  document.getElementById('modalFav').addEventListener('click', (e)=>{
      e.stopPropagation();
      const cardFavBtn = document.querySelector(`.movie-card[data-id="${m.id}"] .fav-btn`);
      toggleFavorite(m.id, cardFavBtn || e.target);
  });
}

/* close modal (Giữ nguyên) */
function closeModal(){ movieModal.classList.add('hidden'); movieModal.setAttribute('aria-hidden','true'); }
document.getElementById('modalClose')?.addEventListener('click', closeModal);
document.getElementById('modalOverlay')?.addEventListener('click', closeModal);
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });


/* === THÊM MỚI (CODE 01): Hàm reset filter cho các chế độ xem đặc biệt === */
function resetFiltersForSpecialView() {
    state.page = 1;
    state.filterQuery = '';
    state.selectedGenres = [];

    // Reset UI controls
    ratingFilter.value = 0;
    searchInput.value = '';
    sortSelect.value = 'popular';
    toggleGenreModalBtn.textContent = 'Chọn Thể loại';

    // Reset Year Filter UI
    state.yearFrom = null;
    state.yearTo = null;
    updateYearFilterStatus();

    // Deselect quick tabs
    Array.from(quickTabs.querySelectorAll('.tab')).forEach(t=>t.classList.remove('active'));

    // Reset results info text
    document.getElementById('resultsInfo').innerHTML = `Hiển thị <span id="resultCount">0</span> phim`;
}
/* === KẾT THÚC (CODE 01) === */


/* attach events */
function attachEvents(){
  // Home/Reset (Dự án 03)
  homeButton.addEventListener('click', ()=>{
      // ... (Giữ nguyên)
      state = { ...state, filterQuery: '', selectedGenres: [], sortBy: 'popular', ratingMin: 0, yearFrom: null, yearTo: null, page: 1 };

      // === THAY ĐỔI (CODE 01): Reset lại text của resultsInfo ===
      document.getElementById('resultsInfo').innerHTML = `Hiển thị <span id="resultCount">0</span> phim`;
      // === KẾT THÚC (CODE 01) ===

      applyFiltersAndRender();
      // Reset UI controls
      searchInput.value = '';
      ratingFilter.value = 0;
      sortSelect.value = 'popular';
      toggleGenreModalBtn.textContent = 'Chọn Thể loại';
      toggleYearModalBtn.textContent = 'Chọn Năm (Mọi năm)';
      Array.from(quickTabs.querySelectorAll('.tab')).forEach(t=>t.classList.remove('active'));
      quickTabs.querySelector('[data-filter="all"]').classList.add('active');
  });

  // search
  searchInput.addEventListener('input', debounce((e)=>{ state.filterQuery = e.target.value; state.page =1; applyFiltersAndRender(); },300));
  clearSearch.addEventListener('click', ()=>{ searchInput.value=''; state.filterQuery=''; state.page=1; applyFiltersAndRender(); });

  // === GENRE MODAL EVENTS (Dự án 02) ===
  toggleGenreModalBtn.addEventListener('click', openGenreModal);
  genreModalClose.addEventListener('click', closeGenreModal);
  genreModalOverlay.addEventListener('click', closeGenreModal);

  applyGenreFilterBtn.addEventListener('click', () => {
    // ... (Giữ nguyên)
    const checked = Array.from(genreModalContent.querySelectorAll('input[type="checkbox"]:checked')).map(n => n.value);
    state.selectedGenres = checked;
    state.page = 1;
    applyFiltersAndRender();
    closeGenreModal();
    toggleGenreModalBtn.textContent = checked.length > 0 ? `Thể loại (${checked.length} đã chọn)` : 'Chọn Thể loại';
  });

  clearGenreFilterBtn.addEventListener('click', () => {
    // ... (Giữ nguyên)
    const checkboxes = genreModalContent.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(cb => cb.checked = false);
    state.selectedGenres = [];
    state.page = 1;
    applyFiltersAndRender();
    closeGenreModal();
    toggleGenreModalBtn.textContent = 'Chọn Thể loại';
  });
  // ===================================

  // === YEAR MODAL EVENTS (Dự án 03) ===
  toggleYearModalBtn.addEventListener('click', openYearModal);
  yearModalClose.addEventListener('click', closeYearModal);
  yearModalOverlay.addEventListener('click', closeYearModal);

  // Cập nhật trạng thái hiển thị khi nhập liệu trong modal
  modalYearMin.addEventListener('input', updateYearFilterStatus);
  modalYearMax.addEventListener('input', updateYearFilterStatus);

  applyYearFilterBtn.addEventListener('click', () => {
    // ... (Giữ nguyên)
    const min = modalYearMin.value ? Number(modalYearMin.value) : null;
    const max = modalYearMax.value ? Number(modalYearMax.value) : null;
    state.yearFrom = min;
    state.yearTo = max;
    state.page = 1;
    applyFiltersAndRender();
    closeYearModal();
    updateYearFilterStatus();
  });

  clearYearFilterBtn.addEventListener('click', () => {
    // ... (Giữ nguyên)
    modalYearMin.value = '';
    modalYearMax.value = '';
    state.yearFrom = null;
    state.yearTo = null;
    state.page = 1;
    applyFiltersAndRender();
    closeYearModal();
    updateYearFilterStatus();
  });
  // ===================================

  // === RANKING MODAL EVENTS (Dự án 03) ===
  rankingWeekBtn.addEventListener('click', ()=>openRankingModal('week'));
  rankingDayBtn.addEventListener('click', ()=>openRankingModal('day'));
  rankingModalClose.addEventListener('click', closeRankingModal);
  rankingModalOverlay.addEventListener('click', closeRankingModal);
  // ===================================

  // rating/sort
  ratingFilter.addEventListener('change', ()=>{ state.ratingMin = Number(ratingFilter.value); state.page=1; applyFiltersAndRender(); });
  sortSelect.addEventListener('change', ()=>{ state.sortBy = sortSelect.value; state.page=1; applyFiltersAndRender(); });

  // quick tabs
  quickTabs.addEventListener('click', (e)=>{
    // ... (Giữ nguyên)
    if(e.target.classList.contains('tab') && !e.target.classList.contains('ranking-btn')){
      Array.from(quickTabs.querySelectorAll('.tab')).forEach(t=>t.classList.remove('active'));
      e.target.classList.add('active');
      const f = e.target.dataset.filter;
      if(f === 'all') state.sortBy = 'popular';
      else if(f === 'trending-week' || f === 'trending-day') state.sortBy = 'trending-week';
      else if(f === 'top-rated') state.sortBy = 'rating';
      state.page=1;
      applyFiltersAndRender();
    }
  });

  // view mode
  gridViewBtn.addEventListener('click', ()=>{ state.viewMode = 'grid'; gridViewBtn.classList.add('active'); listViewBtn.classList.remove('active'); moviesGrid.classList.remove('list'); });
  listViewBtn.addEventListener('click', ()=>{ state.viewMode = 'list'; listViewBtn.classList.add('active'); gridViewBtn.classList.remove('active'); moviesGrid.classList.add('list'); });

  // favorite view
  // === THAY ĐỔI (CODE 01): Cập nhật logic nút Yêu thích ===
  viewFavoritesBtn.addEventListener('click', ()=>{
    // (CODE 01) - Thêm kiểm tra đăng nhập
    if (!userName || !userAvatar) {
        alert('Bạn cần tạo tài khoản để xem phim yêu thích.');
        openProfileModal();
        return;
    }
    resetFiltersForSpecialView();
    applyFavoritesView();
  });
  // === KẾT THÚC (CODE 01) ===

  /* === THÊM MỚI (CODE 01): Gắn sự kiện cho các nút lịch sử === */
  document.getElementById('viewLiked').addEventListener('click', () => {
    if (!userName || !userAvatar) {
        alert('Bạn cần tạo tài khoản để xem lịch sử.');
        openProfileModal();
        return;
    }
    resetFiltersForSpecialView();
    applyInteractionView('liked');
  });

  document.getElementById('viewDisliked').addEventListener('click', () => {
    if (!userName || !userAvatar) {
        alert('Bạn cần tạo tài khoản để xem lịch sử.');
        openProfileModal();
        return;
    }
    resetFiltersForSpecialView();
    applyInteractionView('disliked');
  });

  document.getElementById('viewRated').addEventListener('click', () => {
    if (!userName || !userAvatar) {
        alert('Bạn cần tạo tài khoản để xem lịch sử.');
        openProfileModal();
        return;
    }
    resetFiltersForSpecialView();
    applyInteractionView('rated');
  });

  document.getElementById('viewCommented').addEventListener('click', () => {
    if (!userName || !userAvatar) {
        alert('Bạn cần tạo tài khoản để xem lịch sử.');
        openProfileModal();
        return;
    }
    resetFiltersForSpecialView();
    applyInteractionView('commented');
  });
  /* === KẾT THÚC (CODE 01) === */
}

/* favorites view (THAY ĐỔI - CODE 01) */
function applyFavoritesView(){
  const favList = movies.filter(m=> state.favorites.includes(m.id));

  // Cập nhật thanh thông tin
  document.getElementById('resultsInfo').innerHTML = `Hiển thị <span id="resultCount">${favList.length}</span> phim cho: <strong>Phim yêu thích</strong>`;

  // === THÊM MỚI (CODE 05): Thêm animation fade-in ===
  moviesGrid.classList.remove('grid-fade-in');
  void moviesGrid.offsetWidth; // Trigger reflow
  moviesGrid.classList.add('grid-fade-in');
  // === KẾT THÚC (CODE 05) ===

  renderMovies(favList);
  renderPagination(1); // Tắt phân trang cho danh sách yêu thích
}

/* === THÊM MỚI (CODE 01): Hàm hiển thị danh sách tương tác === */
function applyInteractionView(type) {
    let list = [];
    let title = "Lỗi";
    const interactions = userInteractions;

    switch (type) {
        case 'liked':
            title = "Phim đã thích";
            list = movies.filter(m => interactions[m.id] && interactions[m.id].user_voted === 'like');
            break;
        case 'disliked':
            title = "Phim đã không thích";
            list = movies.filter(m => interactions[m.id] && interactions[m.id].user_voted === 'dislike');
            break;
        case 'rated':
            title = "Phim đã đánh giá";
            list = movies.filter(m => interactions[m.id] && interactions[m.id].user_rating > 0);
            break;
        case 'commented':
            title = "Phim đã bình luận";
            list = movies.filter(m => {
                if (!interactions[m.id] || !interactions[m.id].comments) return false;
                // Kiểm tra xem có bình luận nào của user hiện tại không
                return interactions[m.id].comments.some(c => c.user === userName);
            });
            break;
    }

    // Cập nhật thanh thông tin
    document.getElementById('resultsInfo').innerHTML = `Hiển thị <span id="resultCount">${list.length}</span> phim cho: <strong>${title}</strong>`;

    // === THÊM MỚI (CODE 05): Thêm animation fade-in ===
    moviesGrid.classList.remove('grid-fade-in');
    void moviesGrid.offsetWidth; // Trigger reflow
    moviesGrid.classList.add('grid-fade-in');
    // === KẾT THÚC (CODE 05) ===

    renderMovies(list);
    renderPagination(1); // Tắt phân trang
}
/* === KẾT THÚC (CODE 01) === */

// === CẬP NHẬT (CODE 03): Music Player Logic - Cập nhật renderPlaylist ===

// DOM Elements for Music Player
const audioPlayer = document.getElementById('audioPlayer');
const currentSongTitle = document.getElementById('currentSong');
const playPauseBtn = document.getElementById('playPause');
const prevBtn = document.getElementById('prevTrack');
const nextBtn = document.getElementById('nextTrack');
const seekBar = document.getElementById('seekBar'); 
const currentTimeDisplay = document.getElementById('currentTime'); 
const durationTimeDisplay = document.getElementById('durationTime'); 
const musicPlaylistContainer = document.getElementById('musicPlaylistContainer'); // (CODE 02)

// Danh sách file nhạc
const musicPlaylist = [
    'music/Em Muốn Xa Anh.mp3',
    'music/Ta Chỉ Còn Người Xưa.mp3',
    'music/Cầm Nhẫn Cưới Trên Tay.mp3',
    'music/Em Cứ Vô Tâm.mp3',
    'music/Yêu Anh Rất Nhiều.mp3',
    'music/Hachimi.mp3'
];

let currentTrackIndex = 0;
let isPlaying = false;

// === CẬP NHẬT (CODE 03): Render danh sách nhạc (Thêm <span>) ===
function renderPlaylist() {
    musicPlaylistContainer.innerHTML = '';
    musicPlaylist.forEach((song, index) => {
        const fileName = song.split('/').pop().replace('.mp3', '');
        const item = document.createElement('div');
        item.className = 'playlist-item';
        
        // Bọc text trong <span> để style riêng biệt (cho hiệu ứng rainbow)
        item.innerHTML = `${index + 1}. <span class="playlist-item-text">${escapeHtml(fileName)}</span>`;
        
        item.title = fileName;
        item.dataset.index = index;

        // Thêm class 'active' nếu là bài hát hiện tại
        if (index === currentTrackIndex) {
            item.classList.add('active');
            // Thêm class 'playing' nếu đang phát
            if (isPlaying) {
                item.classList.add('playing');
            }
        }
        
        // Gắn sự kiện click để phát nhạc
        item.addEventListener('click', () => {
            loadTrack(index);
            playTrack();
        });
        
        musicPlaylistContainer.appendChild(item);
    });
}
// === KẾT THÚC CẬP NHẬT (CODE 03) ===

// === CẬP NHẬT (CODE 03): Cập nhật trạng thái active/playing cho playlist ===
function updatePlaylistUI() {
    const items = musicPlaylistContainer.querySelectorAll('.playlist-item');
    items.forEach((item, index) => {
        // Tách riêng phần text để xử lý
        const textSpan = item.querySelector('.playlist-item-text');
        
        // Xóa hết class
        item.classList.remove('active', 'playing');
        
        if (index === currentTrackIndex) {
            item.classList.add('active'); // Thêm active cho bài hiện tại
            if (isPlaying) {
                item.classList.add('playing'); // Thêm playing nếu đang phát
            }
        }
    });
}
// === KẾT THÚC CẬP NHẬT (CODE 03) ===


// Helper function to format time (MM:SS)
function formatTime(seconds) {
    // Xử lý trường hợp NaN hoặc không hợp lệ
    if (isNaN(seconds) || seconds < 0) {
        return "0:00";
    }
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Function to load a track
function loadTrack(trackIndex) {
    if (trackIndex >= 0 && trackIndex < musicPlaylist.length) {
        audioPlayer.src = musicPlaylist[trackIndex];
        audioPlayer.load(); // Quan trọng: load() để lấy duration
        const fileName = musicPlaylist[trackIndex].split('/').pop().replace('.mp3', '');
        currentSongTitle.textContent = fileName;
        currentSongTitle.title = fileName;
        currentTrackIndex = trackIndex;

        // Reset seek bar và time display
        if (seekBar) seekBar.value = 0;
        if (currentTimeDisplay) currentTimeDisplay.textContent = formatTime(0);
        // Đặt duration là loading... cho đến khi metadata được tải
        if (durationTimeDisplay) durationTimeDisplay.textContent = "0:00";


        // isPlaying = false; // Tạm thời bỏ dòng này để logic autoplay (CODE 01) xử lý
        updatePlayPauseIcon();
        updatePlaylistUI(); // (CODE 02): Cập nhật UI playlist

    } else {
        console.error("Track index out of bounds:", trackIndex);
        currentSongTitle.textContent = "Lỗi tải bài hát";
         if (currentTimeDisplay) currentTimeDisplay.textContent = "--:--";
         if (durationTimeDisplay) durationTimeDisplay.textContent = "--:--";
    }
}

// Function to update play/pause icon
function updatePlayPauseIcon() {
    const icon = playPauseBtn.querySelector('i');
    if (isPlaying) {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        playPauseBtn.title = "Tạm dừng";
    } else {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        playPauseBtn.title = "Phát";
    }
    updatePlaylistUI(); // (CODE 02): Cập nhật UI playlist khi play/pause
}

// Function to play track
function playTrack() {
    executePlay();
}

// Hàm thực thi play thực sự
function executePlay() {
     if (audioPlayer.readyState >= 1) { // Chỉ cần HAVE_METADATA
        const playPromise = audioPlayer.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                isPlaying = true;
                updatePlayPauseIcon();
                console.log("Playing:", musicPlaylist[currentTrackIndex]);
            })
            .catch(error => {
                console.error("Lỗi khi phát nhạc:", error);
                isPlaying = false;
                updatePlayPauseIcon();
            });
        }
    } else {
        console.log("Audio chưa sẵn sàng, đang đợi 'canplaythrough'...");
        audioPlayer.addEventListener('canplaythrough', executePlay, { once: true });
    }
}

// Function to pause track
function pauseTrack() {
    audioPlayer.pause();
    isPlaying = false;
    updatePlayPauseIcon();
}

// === THAY ĐỔI (CODE 01): Luôn tự động phát bài tiếp theo ===
// Function to play next track
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % musicPlaylist.length;
    loadTrack(currentTrackIndex);
    // Tự động play bài tiếp theo
    setTimeout(playTrack, 150); // Delay nhỏ để đảm bảo load xong
}

// Function to play previous track
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + musicPlaylist.length) % musicPlaylist.length;
    loadTrack(currentTrackIndex);
     // Tự động play bài trước
    setTimeout(playTrack, 150);
}
// === KẾT THÚC (CODE 01) ===

// Event Listeners for Controls
playPauseBtn.addEventListener('click', () => {
    if (!audioPlayer.src || audioPlayer.src === window.location.href || audioPlayer.src === "") {
        console.log("Chưa có bài hát nào được tải.");
        if (musicPlaylist.length > 0) {
             loadTrack(currentTrackIndex);
             // Không tự động play khi load lần đầu
        }
        return;
    }

    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});

nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);

// Event Listener for when track ends -> play next
audioPlayer.addEventListener('ended', nextTrack);

// Event Listener to update duration time and seek bar max when metadata is loaded
audioPlayer.addEventListener('loadedmetadata', () => {
     if (currentTrackIndex >= 0 && currentTrackIndex < musicPlaylist.length) {
        const fileName = musicPlaylist[currentTrackIndex].split('/').pop().replace('.mp3', '');
        currentSongTitle.textContent = fileName;
        currentSongTitle.title = fileName;

        // Cập nhật max của seek bar và duration time
        if (seekBar && !isNaN(audioPlayer.duration)) {
             seekBar.max = Math.floor(audioPlayer.duration);
             if(durationTimeDisplay) durationTimeDisplay.textContent = formatTime(audioPlayer.duration);
             console.log("Duration set:", audioPlayer.duration);
        } else {
             if (seekBar) seekBar.max = 0;
             if (durationTimeDisplay) durationTimeDisplay.textContent = "0:00"; // Reset về 0:00
        }
     } else {
        currentSongTitle.textContent = "-- Lỗi --";
        if (durationTimeDisplay) durationTimeDisplay.textContent = "--:--";
     }
     // Reset current time display khi bài hát mới được load
     if (currentTimeDisplay) currentTimeDisplay.textContent = formatTime(0);
     if (seekBar) seekBar.value = 0; // Reset cả value của seekbar
});

// Event listeners cho Seek Bar và Current Time
// Cập nhật seek bar và current time khi nhạc chạy
audioPlayer.addEventListener('timeupdate', () => {
    if (seekBar && !isNaN(audioPlayer.duration)) {
        // Chỉ cập nhật value nếu người dùng không đang kéo thanh trượt
         if (!seekBar.matches(':active')) {
            seekBar.value = Math.floor(audioPlayer.currentTime);
         }
         // Cập nhật current time display
         if (currentTimeDisplay) currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);

         // Cập nhật lại duration nếu nó chưa đúng (có thể do load chậm)
         if (durationTimeDisplay && parseInt(seekBar.max) !== Math.floor(audioPlayer.duration) && audioPlayer.duration > 0){
             seekBar.max = Math.floor(audioPlayer.duration);
             durationTimeDisplay.textContent = formatTime(audioPlayer.duration);
         }

    } else {
        // Reset nếu không có duration hợp lệ
        if (seekBar) {
            seekBar.value = 0;
        }
        if (currentTimeDisplay) currentTimeDisplay.textContent = formatTime(0);
    }
});


// Tua nhạc khi người dùng thay đổi giá trị seek bar (khi thả chuột)
seekBar.addEventListener('change', () => {
    if (!isNaN(audioPlayer.duration)) {
        audioPlayer.currentTime = seekBar.value;
         // Cập nhật current time display ngay lập tức sau khi tua
         if (currentTimeDisplay) currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
    }
});

// === KẾT THÚC (CODE 24) ===

/* helper (Giữ nguyên) */
function debounce(fn, wait=300){ let t; return function(...a){ clearTimeout(t); t = setTimeout(()=>fn.apply(this,a), wait); }; }
function escapeHtml(str){ return String(str||'').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s])); }