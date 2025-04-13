<?php

$page = "courses";

if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {
        case "courses":
            $page = "courses";
            break;
        case "profile":
            $page = "profile";
            break;
        case "forum":
            $page = "forum";
            break;
        case "bulletin":
            $page = "bulletin";
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <link rel="icon" href="img/techturo.png" type="image/png">

    <style>
        body {
            background-color: #f9f5ff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .navbar {
            background-color: #6f42c1 !important;
        }

        .navbar-brand {
            color: #ffffff !important;
            font-size: 1.6rem;
        }

        .navbar .form-control,
        .navbar .btn-outline-success {
            border-radius: 30px;
        }

        .card {
            border-radius: 20px;
            background-color: #ffffff;
        }

        .btn-primary {
            background-color: #6f42c1;
            border-color: #6f42c1;
        }

        .btn-primary:hover {
            background-color: #5a34a1;
            border-color: #5a34a1;
        }

        .text-bg-secondary {
            background-color: #a084dc !important;
        }

        .card-title {
            color: #6f42c1;
            font-weight: bold;
        }

        .card-text {
            color: #4b4b4b;
        }

        .h4,
        .h2 {
            color: #6f42c1;
        }

        .btn:hover {
            background-color: #7c4dff;
            transition: 0.3s;
        }

        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background: #a97be0;
            border-radius: 4px;
        }

        .bg-purple {
            background-color: #6f42c1;
        }

        .sidebar-link {
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            margin-bottom: 0.5rem;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.1);
            display: block;
            transition: all 0.3s ease;
        }

        .sidebar-link:hover {
            background-color: #ffffff;
            color: #6f42c1;
            font-weight: bold;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }
    </style>
</head>

<body>

    <nav class="navbar navbar-expand-lg shadow-sm" style="background-color: #6f42c1;">
        <div class="container-fluid">
            <img src="img/Wtech.png" alt="Logo" width="40" height="40">
            <a class="navbar-brand fw-bold text-white" href="?page=feed" style="font-size: 1.8rem;">
                <i class="bi bi-lightning-fill me-2"></i>Tech-Turo
            </a>
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <form class="d-flex me-3" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                        style="border-radius: 30px;">
                    <button class="btn btn-outline-light" type="submit" style="border-radius: 30px;">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-5 col-sm-3 col-md-2 col-lg-2">
                <div class="bg-purple text-white d-flex flex-column p-4 rounded-3 shadow" style="height: 85vh;">
                    <h2 class="fw-bold mb-4">Tech Turo</h2>
                    <a href="?page=courses" class="sidebar-link">Courses</a>
                    <a href="?page=profile" class="sidebar-link">Profile</a>
                    <a href="?page=forum" class="sidebar-link">Forum</a>
                    <a href="?page=bulletin" class="sidebar-link">Bulletin</a>


                    <div class="mt-auto">
                        <hr>
                        <p class="small text-white-50">© 2025 Tech Turo | Built with passion.</p>
                    </div>
                </div>
            </div>


            <div class="col-7 col-sm-9 col-md-10 col-lg-10">
                <div style="height: 85vh; overflow-y: auto; background-color: #f8f9fa;">
                    <div class="card border-0 rounded-4 shadow-sm p-4 h-85">
                        <?php include("shared/" . $page . ".php"); ?>
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