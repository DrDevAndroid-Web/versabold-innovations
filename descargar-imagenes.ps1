# Script para descargar imagenes CC0 de Unsplash (PowerShell)
# Uso: . .\descargar-imagenes.ps1

$DownloadFolder = ".\assets\images"
$ImageList = @(
    # HERO
    @{ URL = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"; File = "hero-main.webp" },

    # PROBLEMA (4 cards)
    @{ URL = "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=600&h=400&fit=crop"; File = "problem-redes-sociales.webp" },
    @{ URL = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"; File = "problem-control-operacion.webp" },
    @{ URL = "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop"; File = "problem-tareas-manuales.webp" },
    @{ URL = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"; File = "problem-experiencia-cliente.webp" },

    # SERVICIOS (6 cards)
    @{ URL = "https://images.unsplash.com/photo-1467232557959-e6c4b0a7485a?w=600&h=600&fit=crop"; File = "service-paginas-web.webp" },
    @{ URL = "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=600&h=600&fit=crop"; File = "service-tienda-virtual.webp" },
    @{ URL = "https://images.unsplash.com/photo-1555099962-4199f1a92b85?w=600&h=600&fit=crop"; File = "service-apps-moviles.webp" },
    @{ URL = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop"; File = "service-sistemas-gestion.webp" },
    @{ URL = "https://images.unsplash.com/photo-1467232557959-e6c4b0a7485a?w=600&h=600&fit=crop"; File = "service-landing-pages.webp" },
    @{ URL = "https://images.unsplash.com/photo-1508995520849-bea66e89e163?w=600&h=600&fit=crop"; File = "service-impresion.webp" },

    # PROCESO (4 pasos)
    @{ URL = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"; File = "proceso-analizar.webp" },
    @{ URL = "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop"; File = "proceso-disenar.webp" },
    @{ URL = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop"; File = "proceso-desarrollar.webp" },
    @{ URL = "https://images.unsplash.com/photo-1553969459-d2229ba7433b?w=1200&h=600&fit=crop"; File = "proceso-acompanar.webp" },

    # PROYECTOS (3 cards)
    @{ URL = "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=500&fit=crop"; File = "proyecto-inventario.webp" },
    @{ URL = "https://images.unsplash.com/photo-1555089252-b3ff0fa1d1ba?w=800&h=500&fit=crop"; File = "proyecto-tienda.webp" },
    @{ URL = "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop"; File = "proyecto-marca.webp" },

    # TESTIMONIOS (3 retratos)
    @{ URL = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"; File = "testimonial-1.webp" },
    @{ URL = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"; File = "testimonial-2.webp" },
    @{ URL = "https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=200&h=200&fit=crop"; File = "testimonial-3.webp" },

    # CTA FONDO
    @{ URL = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"; File = "cta-bg.webp" }
)

# Crear carpeta si no existe
if (!(Test-Path $DownloadFolder)) {
    New-Item -ItemType Directory -Path $DownloadFolder -Force | Out-Null
    Write-Host "Carpeta creada: $DownloadFolder" -ForegroundColor Green
}

# Descargar imagenes
$count = 0
$ImageList | ForEach-Object {
    $url = $_.URL
    $file = $_.File
    $filePath = Join-Path $DownloadFolder $file

    try {
        Write-Host "Descargando: $file..." -ForegroundColor Cyan -NoNewline
        Invoke-WebRequest -Uri $url -OutFile $filePath -UseBasicParsing
        $count++
        Write-Host " OK" -ForegroundColor Green
    } catch {
        Write-Host " ERROR" -ForegroundColor Red
        Write-Host "  Detalles: $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Descarga completada: $count/$($ImageList.Count) imagenes" -ForegroundColor Cyan
Write-Host "Carpeta: $DownloadFolder" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Proximo paso: Abre index.html en tu navegador" -ForegroundColor Green
