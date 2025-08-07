<?php
$page = "courses";
if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {
        case "courses":
        case "profile":
        case "forum":
        case "bulletin":
            break;
        default:
            header("Location: ?page=courses");
            break;
    }
} else {
    header("Location: ?page=courses");
}
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tech-Turo</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <link rel="icon" href="assets/img/techturo.png" type="image/png">
    <link href="assets/css/style.css" rel="stylesheet">
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-dark shadow-sm">
        <div class="container-fluid">
            <img src="assets/img/Wtech.png" alt="Logo" width="40" height="40">
            <a class="navbar-brand fw-bold text-white ms-2" href="?page=feed">
                <i class="bi bi-lightning-fill me-2"></i>Tech-Turo
            </a>
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <!-- Sidebar links as nav items (mobile only) -->
                <ul class="navbar-nav me-auto d-lg-none mt-2">
                    <li><a class="nav-link text-white" href="?page=courses">Courses</a></li>
                    <li><a class="nav-link text-white" href="?page=profile">Profile</a></li>
                    <li><a class="nav-link text-white" href="?page=forum">Forum</a></li>
                    <li><a class="nav-link text-white" href="?page=bulletin">Bulletin</a></li>
                </ul>

                <form class="d-flex ms-auto me-2" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <div class="container-fluid mt-3">
        <div class="row">
            <!-- Desktop Sidebar -->
            <div class="col-lg-2 d-none d-lg-block">
                <div class="sidebar text-white d-flex flex-column p-4 rounded-3 shadow">
                    <h4 class="fw-bold mb-4">Tech Turo</h4>
                    <a href="?page=courses" class="sidebar-link">Courses</a>
                    <a href="?page=profile" class="sidebar-link">Profile</a>
                    <a href="?page=forum" class="sidebar-link">Forum</a>
                    <a href="?page=bulletin" class="sidebar-link">Bulletin</a>

                    <div class="mt-auto pt-3">
                        <hr>
                        <p class="small text-white-50">© 2025 Tech Turo | Built with passion.</p>
                    </div>
                </div>
            </div>

            <!-- Main Content -->
            <div class="col-12 col-lg-10">
                <div style="height: 85vh; overflow-y: auto; background-color: #f8f9fa;">
                    <div class="card border-0 rounded-4 shadow-sm p-4 h-100">
                        <?php include("assets/shared/" . $page . ".php"); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
        crossorigin="anonymous"></script>
</body>

</html>