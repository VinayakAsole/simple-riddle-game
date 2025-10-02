// Enhanced Alphanumerical Riddle Game with Multi-Page System
class AlphanumericalRiddleGame {
    constructor() {
        this.currentPage = 'welcome';
        this.currentStage = 'easy';
        this.currentLevel = 1;
        this.maxLevel = 20;
        this.levelStartTime = null;
        this.levelAttempts = 0;
        
        // Comprehensive riddle database organized by difficulty and level
        this.riddleDatabase = {
            easy: [
                // Levels 1-20 Easy - All New Unique Patterns
                { question: "What comes next?", sequence: "A10, B20, C30, D40, ?", answer: "E50", hint: "Letters in order, numbers increase by 10" },
                { question: "Complete the pattern:", sequence: "Z1, A2, B3, C4, ?", answer: "D5", hint: "Alphabet wraps from Z to A, numbers increase by 1" },
                { question: "Find the next:", sequence: "H8, I9, J10, K11, ?", answer: "L12", hint: "Letters and numbers match their alphabet positions" },
                { question: "What's the sequence?", sequence: "A1, A2, B3, B4, ?", answer: "C5", hint: "Each letter appears twice with consecutive numbers" },
                { question: "Complete this:", sequence: "M1, O2, Q3, S4, ?", answer: "U5", hint: "Skip one letter each time, numbers increase by 1" },
                { question: "Next in pattern:", sequence: "A100, B200, C300, D400, ?", answer: "E500", hint: "Letters in order, numbers increase by 100" },
                { question: "Find the next term:", sequence: "Y2, X4, W6, V8, ?", answer: "U10", hint: "Go backwards in alphabet, numbers increase by 2" },
                { question: "What comes next?", sequence: "A1, C1, E1, G1, ?", answer: "I1", hint: "Skip one letter each time, all numbers are 1" },
                { question: "Complete pattern:", sequence: "B11, C22, D33, E44, ?", answer: "F55", hint: "Letters in order, numbers are double digits" },
                { question: "Find sequence:", sequence: "A0, B1, C2, D3, ?", answer: "E4", hint: "Letters in order, numbers start from 0" },
                { question: "What's next?", sequence: "J1, K3, L5, M7, ?", answer: "N9", hint: "Letters in order, numbers are odd" },
                { question: "Complete this:", sequence: "A12, B24, C36, D48, ?", answer: "E60", hint: "Letters in order, numbers are multiples of 12" },
                { question: "Next term:", sequence: "P1, Q1, R2, S2, ?", answer: "T3", hint: "Letters in order, numbers increase every two letters" },
                { question: "Find pattern:", sequence: "A9, B18, C27, D36, ?", answer: "E45", hint: "Letters in order, numbers are multiples of 9" },
                { question: "What comes next?", sequence: "F1, H2, J3, L4, ?", answer: "N5", hint: "Skip one letter each time, numbers increase by 1" },
                { question: "Complete sequence:", sequence: "A25, B50, C75, D100, ?", answer: "E125", hint: "Letters in order, numbers increase by 25" },
                { question: "Find the next:", sequence: "T1, U1, V2, W2, ?", answer: "X3", hint: "Letters in order, numbers increase every two letters" },
                { question: "What's the pattern?", sequence: "A8, C16, E24, G32, ?", answer: "I40", hint: "Skip letters, numbers are multiples of 8" },
                { question: "Next in sequence:", sequence: "D4, E5, F6, G7, ?", answer: "H8", hint: "Letters and numbers both increase by 1" },
                { question: "Final easy challenge:", sequence: "A15, B30, C45, D60, ?", answer: "E75", hint: "Letters in order, numbers are multiples of 15" }
            ],
            medium: [
                // Levels 1-20 Medium - All New Complex Patterns
                { question: "What comes next?", sequence: "A2, D8, G14, J20, ?", answer: "M26", hint: "Skip 2 letters, add 6 each time" },
                { question: "Find the pattern:", sequence: "B1, F5, J9, N13, ?", answer: "R17", hint: "Skip 3 letters, add 4 each time" },
                { question: "Complete this:", sequence: "A3, C9, E15, G21, ?", answer: "I27", hint: "Skip 1 letter, add 6 each time" },
                { question: "What's the sequence?", sequence: "Z26, W23, T20, Q17, ?", answer: "N14", hint: "Go backwards, skip 2 letters, subtract 3" },
                { question: "Find next term:", sequence: "A1, E5, I9, M13, ?", answer: "Q17", hint: "Skip 3 letters, add 4 each time" },
                { question: "Complete pattern:", sequence: "B4, F12, J20, N28, ?", answer: "R36", hint: "Skip 3 letters, add 8 each time" },
                { question: "What comes next?", sequence: "A7, D21, G35, J49, ?", answer: "M63", hint: "Skip 2 letters, add 14 each time" },
                { question: "Find the next:", sequence: "C6, H18, M30, R42, ?", answer: "W54", hint: "Skip 4 letters, add 12 each time" },
                { question: "Complete this:", sequence: "A5, F25, K45, P65, ?", answer: "U85", hint: "Skip 4 letters, add 20 each time" },
                { question: "What's the pattern?", sequence: "B3, G15, L27, Q39, ?", answer: "V51", hint: "Skip 4 letters, add 12 each time" },
                { question: "Find sequence:", sequence: "A10, E30, I50, M70, ?", answer: "Q90", hint: "Skip 3 letters, add 20 each time" },
                { question: "Complete pattern:", sequence: "D2, I12, N22, S32, ?", answer: "X42", hint: "Skip 4 letters, add 10 each time" },
                { question: "What comes next?", sequence: "A4, F20, K36, P52, ?", answer: "U68", hint: "Skip 4 letters, add 16 each time" },
                { question: "Find the next:", sequence: "C8, I24, O40, U56, ?", answer: "A72", hint: "Skip 5 letters, add 16 each time (wraps)" },
                { question: "Complete this:", sequence: "B6, H24, N42, T60, ?", answer: "Z78", hint: "Skip 5 letters, add 18 each time" },
                { question: "What's next?", sequence: "A11, G33, M55, S77, ?", answer: "Y99", hint: "Skip 5 letters, add 22 each time" },
                { question: "Find pattern:", sequence: "E1, K7, Q13, W19, ?", answer: "C25", hint: "Skip 5 letters, add 6 each time (wraps)" },
                { question: "Complete sequence:", sequence: "A13, H39, O65, V91, ?", answer: "C117", hint: "Skip 6 letters, add 26 each time (wraps)" },
                { question: "What comes next?", sequence: "D5, L25, T45, B65, ?", answer: "J85", hint: "Skip 7 letters, add 20 each time (wraps)" },
                { question: "Final medium challenge:", sequence: "A16, J48, S80, B112, ?", answer: "K144", hint: "Skip 8 letters, add 32 each time (wraps)" }
            ],
            hard: [
                // Levels 1-20 Hard - All New Advanced Mathematical Patterns
                { question: "Complete this sequence:", sequence: "A1, D8, I27, P64, ?", answer: "Y125", hint: "Triangular positions with perfect cubes (1³, 2³, 3³, 4³, 5³)" },
                { question: "What's the pattern?", sequence: "B4, F16, L36, T64, ?", answer: "D100", hint: "Triangular positions, numbers are perfect squares times 4" },
                { question: "Find the next term:", sequence: "A2, E10, K26, S50, ?", answer: "C82", hint: "Pentagonal positions, numbers follow 2n²-2n+2 pattern" },
                { question: "Complete pattern:", sequence: "C3, H24, Q75, D144, ?", answer: "S243", hint: "Complex position jumps with n³×3 pattern" },
                { question: "What comes next?", sequence: "A7, G49, Q169, E361, ?", answer: "W625", hint: "Prime position jumps with consecutive odd squares" },
                { question: "Find sequence:", sequence: "B5, J25, V125, N625, ?", answer: "Z3125", hint: "Fibonacci positions with powers of 5" },
                { question: "Complete this:", sequence: "A6, I72, U432, Q2592, ?", answer: "A15552", hint: "Octagonal positions, numbers multiply by 6 each time" },
                { question: "What's next?", sequence: "D16, P256, H4096, X65536, ?", answer: "T1048576", hint: "Hexagonal positions with powers of 16" },
                { question: "Find pattern:", sequence: "A9, L144, C729, R2916, ?", answer: "M11664", hint: "Complex jumps with perfect squares times 9" },
                { question: "Complete sequence:", sequence: "E32, T1024, M32768, F1048576, ?", answer: "Y33554432", hint: "Prime positions with powers of 32" },
                { question: "What comes next?", sequence: "A11, N169, D625, S2401, ?", answer: "L8281", hint: "Triangular jumps with consecutive prime squares" },
                { question: "Find the next:", sequence: "C18, R324, K5832, D104976, ?", answer: "W1889568", hint: "Complex pattern with 18×n² progression" },
                { question: "Complete pattern:", sequence: "B14, Q196, J2744, C38416, ?", answer: "V537824", hint: "Fibonacci positions with 14×n³ pattern" },
                { question: "What's next?", sequence: "F21, Y441, R9261, K194481, ?", answer: "D4084101", hint: "Hexagonal positions with 21×n⁴ pattern" },
                { question: "Find sequence:", sequence: "A23, X529, U12167, R279841, ?", answer: "O6436343", hint: "Prime positions with 23×n⁵ pattern" },
                { question: "Complete this:", sequence: "E26, Z676, U17576, P456976, ?", answer: "K11881376", hint: "Pentagonal positions with 26×n⁶ pattern" },
                { question: "What comes next?", sequence: "H29, C841, X24389, S707281, ?", answer: "N20511149", hint: "Octagonal positions with 29×n⁷ pattern" },
                { question: "Find pattern:", sequence: "B31, A961, Y29791, T923521, ?", answer: "O28629151", hint: "Complex prime jumps with 31×n⁸ pattern" },
                { question: "Complete sequence:", sequence: "J33, B1089, Z35937, U1185921, ?", answer: "P39135393", hint: "Fibonacci positions with 33×n⁹ pattern" },
                { question: "Ultimate challenge:", sequence: "A37, A1369, A50653, A1874161, ?", answer: "A69343957", hint: "All A's with 37×n¹⁰ pattern - the ultimate test!" }
            ]
        };
        
        this.stats = {
            easy: { completed: 0, total: 20 },
            medium: { completed: 0, total: 20 },
            hard: { completed: 0, total: 20 },
            overall: { correct: 0, total: 0, streak: 0 }
        };
        
        this.loadStats();
        this.initializeElements();
        this.bindEvents();
        this.showPage('welcome');
    }
    
    initializeElements() {
        // Page elements
        this.welcomePage = document.getElementById('welcomePage');
        this.stageSelectionPage = document.getElementById('stageSelectionPage');
        this.gamePage = document.getElementById('gamePage');
        
        // Navigation buttons
        this.startGameBtn = document.getElementById('startGameBtn');
        this.backToWelcome = document.getElementById('backToWelcome');
        this.backToStages = document.getElementById('backToStages');
        this.backToStagesFromModal = document.getElementById('backToStagesFromModal');
        
        // Stage selection
        this.stageCards = document.querySelectorAll('.stage-card');
        this.selectStageBtns = document.querySelectorAll('.select-stage-btn');
        
        // Game elements
        this.currentStageEl = document.getElementById('currentStage');
        this.currentLevelEl = document.getElementById('currentLevel');
        this.progressFill = document.getElementById('progressFill');
        this.riddleText = document.getElementById('riddleText');
        this.answerInput = document.getElementById('answerInput');
        this.submitBtn = document.getElementById('submitBtn');
        this.resultSection = document.getElementById('resultSection');
        this.resultText = document.getElementById('resultText');
        this.hintBtn = document.getElementById('hintBtn');
        this.hintText = document.getElementById('hintText');
        this.difficultyBadge = document.getElementById('difficulty');
        
        // Stats elements
        this.correctAnswersEl = document.getElementById('correctAnswers');
        this.totalAttemptsEl = document.getElementById('totalAttempts');
        this.currentStreakEl = document.getElementById('currentStreak');
        
        // Completion displays
        this.easyCompletion = document.getElementById('easyCompletion');
        this.mediumCompletion = document.getElementById('mediumCompletion');
        this.hardCompletion = document.getElementById('hardCompletion');
        
        // Modal elements
        this.congratsModal = document.getElementById('congratsModal');
        this.congratsText = document.getElementById('congratsText');
        this.quickTime = document.getElementById('quickTime');
        this.quickAttempts = document.getElementById('quickAttempts');
        this.nextQuizBtn = document.getElementById('nextQuizBtn');
        this.stayHereBtn = document.getElementById('stayHereBtn');
        
        this.showLevelsModal = document.getElementById('showLevelsModal');
        this.levelsModalSubtitle = document.getElementById('levelsModalSubtitle');
        this.levelsGrid = document.getElementById('levelsGrid');
        this.showLevelsBtn = document.getElementById('showLevelsBtn');
        this.closeLevelsModal = document.getElementById('closeLevelsModal');
        this.closeLevelsBtn = document.getElementById('closeLevelsBtn');
        this.resetProgressBtn = document.getElementById('resetProgressBtn');
        
        this.levelCompleteModal = document.getElementById('levelCompleteModal');
        this.levelCompleteText = document.getElementById('levelCompleteText');
        this.levelTime = document.getElementById('levelTime');
        this.levelAttempts = document.getElementById('levelAttempts');
        this.nextLevelBtn = document.getElementById('nextLevelBtn');
    }
    
    bindEvents() {
        // Navigation events
        this.startGameBtn.addEventListener('click', () => this.showPage('stageSelection'));
        this.backToWelcome.addEventListener('click', () => this.showPage('welcome'));
        this.backToStages.addEventListener('click', () => this.showPage('stageSelection'));
        this.backToStagesFromModal.addEventListener('click', () => {
            this.hideModal();
            this.showPage('stageSelection');
        });
        
        // Stage selection events
        this.selectStageBtns.forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                const stageCard = e.target.closest('.stage-card');
                const stage = stageCard.dataset.stage;
                this.startStage(stage);
            });
        });
        
        // Game events
        this.submitBtn.addEventListener('click', () => this.checkAnswer());
        this.answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkAnswer();
            }
        });
        this.hintBtn.addEventListener('click', () => this.showHint());
        this.nextQuizBtn.addEventListener('click', () => this.nextQuiz());
        this.stayHereBtn.addEventListener('click', () => this.hideCongratsModal());
        this.nextLevelBtn.addEventListener('click', () => this.nextLevel());
        
        // Show levels modal events
        this.showLevelsBtn.addEventListener('click', () => this.openLevelsModal());
        this.closeLevelsModal.addEventListener('click', () => this.hideLevelsModal());
        this.closeLevelsBtn.addEventListener('click', () => this.hideLevelsModal());
        this.resetProgressBtn.addEventListener('click', () => this.resetStageProgress());
    }
    
    showPage(pageName) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show selected page
        document.getElementById(pageName + 'Page').classList.add('active');
        this.currentPage = pageName;
        
        // Update page-specific content
        if (pageName === 'stageSelection') {
            this.updateStageCompletions();
        } else if (pageName === 'game') {
            this.displayCurrentRiddle();
            this.updateGameHeader();
            this.answerInput.focus();
        }
    }
    
    updateStageCompletions() {
        this.easyCompletion.textContent = `${this.stats.easy.completed}/${this.stats.easy.total}`;
        this.mediumCompletion.textContent = `${this.stats.medium.completed}/${this.stats.medium.total}`;
        this.hardCompletion.textContent = `${this.stats.hard.completed}/${this.stats.hard.total}`;
    }
    
    startStage(stage) {
        this.currentStage = stage;
        this.currentLevel = this.getNextIncompleteLevel(stage);
        this.levelStartTime = Date.now();
        this.levelAttempts = 0;
        this.showPage('game');
    }
    
    getNextIncompleteLevel(stage) {
        const completedLevels = this.getCompletedLevels(stage);
        for (let i = 1; i <= this.maxLevel; i++) {
            if (!completedLevels.includes(i)) {
                return i;
            }
        }
        return 1; // If all completed, start from beginning
    }
    
    getCompletedLevels(stage) {
        const saved = localStorage.getItem(`completedLevels_${stage}`);
        return saved ? JSON.parse(saved) : [];
    }
    
    markLevelCompleted(stage, level) {
        const completed = this.getCompletedLevels(stage);
        if (!completed.includes(level)) {
            completed.push(level);
            localStorage.setItem(`completedLevels_${stage}`, JSON.stringify(completed));
            this.stats[stage].completed = completed.length;
            this.saveStats();
        }
    }
    
    updateGameHeader() {
        this.currentStageEl.textContent = this.currentStage.charAt(0).toUpperCase() + this.currentStage.slice(1);
        this.currentLevelEl.textContent = this.currentLevel;
        
        const progress = (this.currentLevel / this.maxLevel) * 100;
        this.progressFill.style.width = `${progress}%`;
        
        // Update difficulty badge color
        const colors = {
            easy: 'linear-gradient(45deg, #4CAF50, #45a049)',
            medium: 'linear-gradient(45deg, #FF9800, #F57C00)',
            hard: 'linear-gradient(45deg, #f44336, #d32f2f)'
        };
        this.difficultyBadge.style.background = colors[this.currentStage];
        this.difficultyBadge.textContent = this.currentStage.charAt(0).toUpperCase() + this.currentStage.slice(1);
    }
    
    displayCurrentRiddle() {
        const riddle = this.riddleDatabase[this.currentStage][this.currentLevel - 1];
        
        this.riddleText.innerHTML = `
            ${riddle.question}<br>
            <span class="sequence">${riddle.sequence}</span>
        `;
        
        // Clear previous results and hints
        this.resultText.textContent = '';
        this.resultText.className = '';
        this.hintText.textContent = '';
        this.answerInput.value = '';
        this.answerInput.focus();
    }
    
    checkAnswer() {
        const userAnswer = this.answerInput.value.trim().toUpperCase();
        const riddle = this.riddleDatabase[this.currentStage][this.currentLevel - 1];
        const correctAnswer = riddle.answer.toUpperCase();
        
        if (!userAnswer) {
            this.showResult('Please enter an answer!', 'incorrect');
            return;
        }
        
        this.levelAttempts++;
        this.stats.overall.total++;
        
        if (userAnswer === correctAnswer) {
            this.stats.overall.correct++;
            this.stats.overall.streak++;
            this.showResult('🎉 Correct! Well done!', 'correct');
            
            // Mark level as completed
            this.markLevelCompleted(this.currentStage, this.currentLevel);
            
            // Show immediate congratulations popup
            setTimeout(() => {
                this.showCongratsModal();
            }, 800);
        } else {
            this.stats.overall.streak = 0;
            this.showResult(`❌ Incorrect. The answer was: ${riddle.answer}`, 'incorrect');
        }
        
        this.updateStatsDisplay();
        this.saveStats();
    }
    
    showResult(message, type) {
        this.resultText.textContent = message;
        this.resultText.className = type;
    }
    
    showHint() {
        const riddle = this.riddleDatabase[this.currentStage][this.currentLevel - 1];
        this.hintText.textContent = `💡 Hint: ${riddle.hint}`;
        this.hintText.style.opacity = '1';
    }
    
    showCongratsModal() {
        const timeElapsed = Math.round((Date.now() - this.levelStartTime) / 1000);
        const minutes = Math.floor(timeElapsed / 60);
        const seconds = timeElapsed % 60;
        const timeString = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
        
        this.congratsText.textContent = `Perfect! You solved it correctly!`;
        this.quickTime.textContent = timeString;
        this.quickAttempts.textContent = `${this.levelAttempts} attempt${this.levelAttempts !== 1 ? 's' : ''}`;
        
        // Update next quiz button text based on level
        if (this.currentLevel >= this.maxLevel) {
            this.nextQuizBtn.innerHTML = '<i class="fas fa-trophy"></i> Stage Complete!';
        } else {
            this.nextQuizBtn.innerHTML = '<i class="fas fa-arrow-right"></i> Next Quiz';
        }
        
        this.congratsModal.classList.add('active');
        
        // Add celebration sound effect (optional)
        this.playCelebrationSound();
    }
    
    hideCongratsModal() {
        this.congratsModal.classList.remove('active');
    }
    
    nextQuiz() {
        this.hideCongratsModal();
        
        if (this.currentLevel >= this.maxLevel) {
            // Stage completed, go back to stage selection
            this.showPage('stageSelection');
            return;
        }
        
        // Move to next level immediately
        this.currentLevel++;
        this.levelStartTime = Date.now();
        this.levelAttempts = 0;
        this.displayCurrentRiddle();
        this.updateGameHeader();
    }
    
    playCelebrationSound() {
        // Create a simple celebration sound using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (error) {
            // Silently fail if Web Audio API is not supported
            console.log('Audio not supported');
        }
    }
    
    showLevelCompleteModal() {
        const timeElapsed = Math.round((Date.now() - this.levelStartTime) / 1000);
        const minutes = Math.floor(timeElapsed / 60);
        const seconds = timeElapsed % 60;
        const timeString = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
        
        this.levelCompleteText.textContent = `Congratulations! You've completed Level ${this.currentLevel} of ${this.currentStage} difficulty.`;
        this.levelTime.textContent = timeString;
        this.levelAttempts.textContent = this.levelAttempts;
        
        // Update next level button text
        if (this.currentLevel >= this.maxLevel) {
            this.nextLevelBtn.textContent = 'Stage Complete!';
        } else {
            this.nextLevelBtn.textContent = 'Next Level';
        }
        
        this.levelCompleteModal.classList.add('active');
    }
    
    hideModal() {
        this.levelCompleteModal.classList.remove('active');
    }
    
    nextLevel() {
        this.hideModal();
        
        if (this.currentLevel >= this.maxLevel) {
            // Stage completed, go back to stage selection
            this.showPage('stageSelection');
            return;
        }
        
        this.currentLevel++;
        this.levelStartTime = Date.now();
        this.levelAttempts = 0;
        this.displayCurrentRiddle();
        this.updateGameHeader();
    }
    
    updateStatsDisplay() {
        this.correctAnswersEl.textContent = this.stats.overall.correct;
        this.totalAttemptsEl.textContent = this.stats.overall.total;
        this.currentStreakEl.textContent = this.stats.overall.streak;
    }
    
    openLevelsModal() {
        this.levelsModalSubtitle.textContent = `${this.currentStage.charAt(0).toUpperCase() + this.currentStage.slice(1)} Difficulty - Track Your Progress`;
        this.generateLevelsGrid();
        this.showLevelsModal.classList.add('active');
    }
    
    hideLevelsModal() {
        this.showLevelsModal.classList.remove('active');
    }
    
    generateLevelsGrid() {
        const completedLevels = this.getCompletedLevels(this.currentStage);
        this.levelsGrid.innerHTML = '';
        
        for (let i = 1; i <= this.maxLevel; i++) {
            const levelItem = document.createElement('div');
            levelItem.className = 'level-item';
            
            let status = '';
            let statusText = '';
            let answerText = '';
            
            if (completedLevels.includes(i)) {
                status = 'completed';
                statusText = 'Completed';
                const riddle = this.riddleDatabase[this.currentStage][i - 1];
                answerText = riddle.answer;
            } else if (i === this.currentLevel) {
                status = 'current';
                statusText = 'Current';
            } else if (i <= this.currentLevel) {
                status = 'available';
                statusText = 'Available';
            } else {
                status = 'locked';
                statusText = 'Locked';
            }
            
            levelItem.classList.add(status);
            levelItem.innerHTML = `
                <div class="level-number">${i}</div>
                <div class="level-status">${statusText}</div>
                ${answerText ? `<div class="level-answer">${answerText}</div>` : ''}
            `;
            
            // Add click event for available levels
            if (status !== 'locked') {
                levelItem.addEventListener('click', () => this.jumpToLevel(i));
            }
            
            this.levelsGrid.appendChild(levelItem);
        }
    }
    
    jumpToLevel(levelNumber) {
        this.currentLevel = levelNumber;
        this.levelStartTime = Date.now();
        this.levelAttempts = 0;
        this.hideLevelsModal();
        this.displayCurrentRiddle();
        this.updateGameHeader();
    }
    
    resetStageProgress() {
        if (confirm(`Are you sure you want to reset all progress for ${this.currentStage} difficulty? This cannot be undone.`)) {
            localStorage.removeItem(`completedLevels_${this.currentStage}`);
            this.stats[this.currentStage].completed = 0;
            this.saveStats();
            this.currentLevel = 1;
            this.generateLevelsGrid();
            this.updateGameHeader();
            
            // Show confirmation
            alert('Progress reset successfully!');
        }
    }
    
    saveStats() {
        localStorage.setItem('riddleGameStats', JSON.stringify(this.stats));
    }
    
    loadStats() {
        const saved = localStorage.getItem('riddleGameStats');
        if (saved) {
            this.stats = { ...this.stats, ...JSON.parse(saved) };
        }
        
        // Update completion counts from localStorage
        ['easy', 'medium', 'hard'].forEach(stage => {
            const completed = this.getCompletedLevels(stage);
            this.stats[stage].completed = completed.length;
        });
    }
}

// Utility functions for animations and effects
function addSparkleEffect(element) {
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    
    const sparkle = document.createElement('div');
    sparkle.style.position = 'absolute';
    sparkle.style.top = '50%';
    sparkle.style.left = '50%';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = 'white';
    sparkle.style.borderRadius = '50%';
    sparkle.style.animation = 'sparkle 1s ease-out';
    sparkle.style.pointerEvents = 'none';
    
    element.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new AlphanumericalRiddleGame();
    
    // Add interactive effects to buttons
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function() {
            addSparkleEffect(this);
        });
    });
    
    // Add typing effect to main title
    const title = document.querySelector('.main-title');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typeEffect = setInterval(() => {
            title.textContent += originalText[i];
            i++;
            if (i >= originalText.length) {
                clearInterval(typeEffect);
            }
        }, 100);
    }
});

// Easter egg - Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === konamiSequence.length && 
        konamiCode.every((code, index) => code === konamiSequence[index])) {
        
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        
        konamiCode = []; // Reset
    }
});