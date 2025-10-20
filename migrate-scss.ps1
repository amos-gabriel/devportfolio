# Script PowerShell pour migrer de @import vers @use dans tous les fichiers SCSS
# Ce script met à jour automatiquement la syntaxe dépréciée

Write-Host "Migration de @import vers @use dans les fichiers SCSS..." -ForegroundColor Green

# Liste des fichiers SCSS à mettre à jour (excluant ceux déjà traités)
$scssFiles = @(
    "src\components\ToggleSwitch\ToggleSwitch.scss",
    "src\components\githubRepoCard\GithubRepoCard.scss",
    "src\components\githubProfileCard\GithubProfileCard.scss",
    "src\components\footer\Footer.scss",
    "src\components\achievementCard\AchievementCard.scss",
    "src\components\talkCard\TalkCard.scss",
    "src\components\softwareSkills\SoftwareSkill.scss",
    "src\components\educationCard\EducationCard.scss",
    "src\components\experienceCard\ExperienceCard.scss",
    "src\components\button\Button.scss",
    "src\components\header\Header.scss",
    "src\components\socialMedia\SocialMedia.scss",
    "src\containers\loading\loading.scss",
    "src\containers\podcast\Podcast.scss",
    "src\containers\skills\Skills.scss",
    "src\containers\talks\Talks.scss",
    "src\containers\contact\Contact.scss",
    "src\containers\greeting\Greeting.scss",
    "src\containers\skillProgress\Progress.scss",
    "src\containers\StartupProjects\StartupProjects.scss",
    "src\containers\topbutton\Top.scss",
    "src\containers\achievement\Achievement.scss",
    "src\containers\blogs\Blog.scss"
)

$totalFiles = $scssFiles.Count
$processedFiles = 0

foreach ($file in $scssFiles) {
    $fullPath = Join-Path $PWD $file
    
    if (Test-Path $fullPath) {
        Write-Host "Traitement de $file..." -ForegroundColor Yellow
        
        # Lire le contenu du fichier
        $content = Get-Content $fullPath -Raw
        
        # Remplacer @import par @use
        $content = $content -replace '@import "\.\.\/\.\.\/\_globalColor";', '@use "../../_globalColor" as colors;'
        $content = $content -replace '@import "\.\.\/\_globalColor";', '@use "../_globalColor" as colors;'
        
        # Remplacer toutes les références de variables par colors.$variable
        $variables = @(
            'buttonColor', 'buttonHover', 'topButtonHover',
            'titleColor', 'textColor', 'subTitle', 'cardSubtitle', 'talkCardSubTitle', 'blogCardTitleColor',
            'textColorDark', 'toggleCheck', 'toggleSwitchSliderBG',
            'githubRepoCardLanguageColorBG', 'githubRepoCardColor', 'githubRepoCardRepoCardStatsColor',
            'githubRepoCardRepoNameColor', 'githubProfileCardLocationTS', 'githubProfileCardBorder',
            'lightBackground1', 'lightBackground2', 'lightBackground3', 'blogCardContainerColor',
            'darkBackground', 'lightBoxShadowDark', 'lightBoxShadow', 'lightBoxShadowDarker',
            'darkBoxShadow', 'darkBoxShadow2', 'experienceCardBlurredDivLG', 'experienceCardBannerLG',
            'progressBarBackground', 'lightBorder1', 'educationCardBorder',
            'achievementCertificateCardHoverDark', 'blogCardHoverSmallColor', 'headerHoverBG',
            'contactDetailHoverTS', 'progressBarSpanBG', 'iconBackground', 'appHeaderBG',
            'skillsColor', 'appLink', 'faceBook', 'linkedin', 'github', 'gitlab', 'google',
            'twitter', 'medium', 'stackoverflow', 'instagram', 'kaggle'
        )
        
        foreach ($variable in $variables) {
            $content = $content -replace "\`$$variable\b", "colors.`$$variable"
        }
        
        # Écrire le contenu modifié
        Set-Content $fullPath $content -NoNewline
        
        $processedFiles++
        Write-Host "✓ $file mis à jour ($processedFiles/$totalFiles)" -ForegroundColor Green
    } else {
        Write-Host "⚠ Fichier non trouvé: $file" -ForegroundColor Red
    }
}

Write-Host "`nMigration terminée ! $processedFiles fichiers traités." -ForegroundColor Green
Write-Host "Vous pouvez maintenant tester votre application avec 'npm start'" -ForegroundColor Cyan