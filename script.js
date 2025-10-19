function calculateRisk() {
    const resultDiv = document.getElementById('result');
    const copyBtn = document.getElementById('copyBtn');
    
    const dEl = document.getElementById('discoverability');
    const eEl = document.getElementById('exploitability');
    const rEl = document.getElementById('reproducibility');
    const cEl = document.getElementById('confidentiality');
    const iEl = document.getElementById('integrity');
    const aEl = document.getElementById('availability');
    
    if (!dEl || !eEl || !rEl || !cEl || !iEl || !aEl) {
        alert('Error: Form elements not found. Please refresh the page.');
        return;
    }
    
    const d = dEl.value;
    const e = eEl.value;
    const r = rEl.value;
    const c = cEl.value;
    const i = iEl.value;
    const a = aEl.value;
    
    if (!d || !e || !r || !c || !i || !a) {
        resultDiv.innerHTML = '<p style="color: #e74c3c;">Complete all assessment fields to calculate risk.</p>';
        copyBtn.style.display = 'none';
        return;
    }
    
    const likelihood = Math.round((parseInt(d) + parseInt(e) + parseInt(r)) / 3);
    const impact = Math.max(parseInt(c), parseInt(i), parseInt(a));
    const riskScore = likelihood * impact;
    const riskRating = getRiskRating(riskScore);
    const riskClass = riskRating.toLowerCase().replace('-', '-');
    
    window.riskBreakdown = `RISK RATING: ${riskScore} (D:${d}/E:${e}/R:${r}/C:${c}/I:${i}/A:${a})`;
    
    resultDiv.innerHTML = `
        <div class="risk-score">Risk Score: ${riskScore}</div>
        <div class="risk-rating ${riskClass}">${riskRating} Risk</div>
        <div style="margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px; font-family: monospace; font-size: 14px;">
            <strong>Risk Breakdown:</strong><br>
            ${window.riskBreakdown}
        </div>
    `;
    
    copyBtn.style.display = 'block';
}

function copyRiskBreakdown() {
    if (window.riskBreakdown) {
        navigator.clipboard.writeText(window.riskBreakdown).then(() => {
            const btn = document.getElementById('copyBtn');
            if (btn) {
                const originalText = btn.textContent;
                btn.textContent = 'Copied!';
                btn.style.background = '#27ae60';
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '#3498db';
                }, 2000);
            }
        }).catch(() => {
            const textArea = document.createElement('textarea');
            textArea.value = window.riskBreakdown;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            const btn = document.getElementById('copyBtn');
            if (btn) {
                const originalText = btn.textContent;
                btn.textContent = 'Copied!';
                setTimeout(() => {
                    btn.textContent = originalText;
                }, 2000);
            }
        });
    }
}

function getRiskRating(score) {
    if (score >= 1 && score <= 4) return 'Low';
    if (score >= 5 && score <= 9) return 'Medium';
    if (score >= 10 && score <= 12) return 'Medium-High';
    if (score >= 15 && score <= 16) return 'High';
    if (score >= 20 && score <= 25) return 'Very-High';
    return 'Unknown';
}

function getLikelihoodText(value) {
    const texts = {
        1: 'Rare',
        2: 'Unlikely',
        3: 'Possible',
        4: 'Likely',
        5: 'Highly Likely'
    };
    return texts[value] || 'Unknown';
}

function getImpactText(value) {
    const texts = {
        1: 'Negligible',
        2: 'Minor',
        3: 'Moderate',
        4: 'Severe',
        5: 'Very Severe'
    };
    return texts[value] || 'Unknown';
}

function getRiskRecommendation(rating) {
    const recommendations = {
        'Low': 'Monitor and review periodically. Standard controls are sufficient.',
        'Medium': 'Implement additional controls and monitor regularly. Management attention required.',
        'Medium-High': 'Enhanced monitoring and controls required. Regular management review necessary.',
        'High': 'Immediate action required. Senior management involvement necessary. Consider risk mitigation strategies.',
        'Very-High': 'URGENT: Immediate executive action required. Stop operations if necessary. Implement emergency response procedures.'
    };
    return recommendations[rating] || 'Consult risk management guidelines.';
}