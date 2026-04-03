const crypto = require("crypto");

const secret = process.env.PR_TARGET_CANARY;

if (!secret) {
  process.stdout.write("missing-secret");
  process.exit(0);
}

process.stdout.write(crypto.createHash("sha256").update(secret).digest("hex"));
