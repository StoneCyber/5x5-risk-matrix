# 5x5 Risk Matrix Calculator

A web-based cybersecurity risk assessment tool using a 5x5 risk matrix based on official cybersecurity standards.

## Live Demo
Visit: `https://[username].github.io/5x5-risk-matrix`

## Features
- Comprehensive risk assessment based on CIA triad and threat factors
- Interactive 5x5 risk matrix visualization
- Automated risk score calculation
- Copy-friendly risk breakdown format
- Responsive design for mobile and desktop

## Assessment Methodology

### Likelihood Assessment (3 Factors)
1. **Discoverability (1-5)**: How easy to discover vulnerability
   - Availability of vulnerability information and asset exposure
2. **Exploitability (1-5)**: How easy to exploit vulnerability
   - Access rights, tool complexity, and technical skills required
3. **Reproducibility (1-5)**: How easy to reproduce attack
   - Exploit customisation complexity and environmental conditions

**Likelihood Score** = Average of 3 factors (rounded)

### Impact Assessment (CIA Triad)
1. **Confidentiality (1-5)**: Impact on data confidentiality
   - Unauthorized access to sensitive information
2. **Integrity (1-5)**: Impact on data integrity
   - Unauthorized modification or destruction of data
3. **Availability (1-5)**: Impact on system availability
   - Disruption of access to systems or services

**Impact Score** = Maximum value from 3 factors

### Risk Calculation
- **Risk Score** = Likelihood × Impact (1-25)
- **Risk Ratings**:
  - **Low**: 1-4 (Green)
  - **Medium**: 5-9 (Light Yellow)
  - **Medium High**: 10-12 (Orange)
  - **High**: 15-16 (Red)
  - **Very High**: 20-25 (Dark Red)

### Risk Breakdown Format
```
RISK RATING: 12 (D:4/E:3/R:5/C:2/I:3/A:1)
```
- D = Discoverability
- E = Exploitability
- R = Reproducibility
- C = Confidentiality
- I = Integrity
- A = Availability

## Local Testing Instructions

### Method 1: Python HTTP Server (Recommended)
```bash
cd /path/to/5x5-risk-matrix
python -m http.server 8000
# Open: http://localhost:8000
```

### Method 2: VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

### Method 3: Direct File
Double-click `index.html` (some features may be limited)

## GitHub Pages Deployment

1. Push code to GitHub repository
2. Go to **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main**, Folder: **/ (root)**
5. Click **Save**
6. Site available at: `https://[username].github.io/5x5-risk-matrix`

## Usage

1. Complete all 6 assessment fields:
   - 3 Likelihood factors (Discoverability, Exploitability, Reproducibility)
   - 3 Impact factors (Confidentiality, Integrity, Availability)
2. Click **Calculate Risk** button
3. View risk score and rating
4. Click **Copy Risk Breakdown** to copy formatted string

## File Structure
```
5x5-risk-matrix/
├── index.html      # Main HTML file
├── style.css       # Styling
├── script.js       # Risk calculation logic
└── README.md       # Documentation
```

## Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Responsive design

## Reference
Based on Singapore Cyber Security Agency (CSA) [Guide to Conducting Cybersecurity Risk Assessment for Critical Information Infrastructure (CII)](https://isomer-user-content.by.gov.sg/36/016e3838-a9e5-4c6e-a037-546e8b7ad684/Guide-to-Conducting-Cybersecurity-Risk-Assessment-for-CII.pdf)
