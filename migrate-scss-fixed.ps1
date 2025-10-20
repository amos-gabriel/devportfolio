# Script to migrate SCSS files from @import to @use syntax
$ErrorActionPreference = "Stop"

# Define the list of SCSS files to update
$scssFiles = @(
    "src\containers\podcast\Podcast.scss",
    "src\components\button\Button.scss",
    "src\components\softwareSkills\SoftwareSkill.scss",
    "src\components\achievementCard\AchievementCard.scss",
    "src\containers\talks\Talks.scss",
    "src\containers\loading\loading.scss",
    "src\containers\StartupProjects\StartupProjects.scss",
    "src\components\socialMedia\SocialMedia.scss",
    "src\components\experienceCard\ExperienceCard.scss",
    "src\components\talkCard\TalkCard.scss",
    "src\containers\topbutton\Top.scss",
    "src\components\githubRepoCard\GithubRepoCard.scss",
    "src\containers\contact\Contact.scss",
    "src\components\header\Header.scss",
    "src\components\ToggleSwitch\ToggleSwitch.scss",
    "src\containers\achievement\Achievement.scss",
    "src\containers\greeting\Greeting.scss",
    "src\components\githubProfileCard\GithubProfileCard.scss",
    "src\containers\skills\Skills.scss",
    "src\containers\skillProgress\Progress.scss",
    "src\components\footer\Footer.scss",
    "src\components\educationCard\EducationCard.scss"
)

Write-Host "Starting SCSS migration..." -ForegroundColor Green

foreach ($file in $scssFiles) {
    $fullPath = Join-Path $PWD $file
    
    if (Test-Path $fullPath) {
        Write-Host "Processing: $file" -ForegroundColor Yellow
        
        # Read the file content
        $content = Get-Content $fullPath -Raw
        
        # Replace @import with @use
        $content = $content -replace '@import\s+"\.\.\/\.\.\/\_globalColor";', '@use "../../_globalColor" as colors;'
        
        # Replace variable references with namespaced versions
        $content = $content -replace '\$([a-zA-Z][a-zA-Z0-9_]*)', 'colors.$$$1'
        
        # Write the updated content back to the file
        Set-Content $fullPath $content -NoNewline
        
        Write-Host "Updated: $file" -ForegroundColor Green
    } else {
        Write-Host "File not found: $file" -ForegroundColor Red
    }
}

Write-Host "SCSS migration completed!" -ForegroundColor Green