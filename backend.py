reasons = []

# Rule 1: resolution
if width < 300 or height < 300:
    reasons.append("Low resolution image")

# Rule 2: OCR text
if "certificate" not in text.lower():
    reasons.append("Missing certificate keywords")

# Rule 3: blur
if blur < 50:
    reasons.append("Image is blurry")

if reasons:
    return jsonify({
        "status": "❌ Suspicious",
        "reasons": reasons
    })
else:
    return jsonify({
        "status": "✅ Looks Legit",
        "reasons": ["All basic checks passed"]
    })
score = 100 - (len(reasons) * 30)
if score < 0:
    score = 10
    "confidence": f"{score}%"