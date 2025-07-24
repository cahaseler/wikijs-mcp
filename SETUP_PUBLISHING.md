# Setup Publishing Guide

## 1. Create NPM Token

Since npm token creation requires interactive authentication, please run this manually:

```bash
npm token create --read-only false
```

When prompted, enter your npm password. Copy the generated token (it starts with `npm_`).

## 2. Add NPM Token to GitHub

Once you have the token, add it to your GitHub repository:

```bash
# Using GitHub CLI (replace YOUR_NPM_TOKEN with the actual token)
gh secret set NPM_TOKEN --body "YOUR_NPM_TOKEN" --repo cahaseler/wikijs-mcp
```

Or manually:
1. Go to https://github.com/cahaseler/wikijs-mcp/settings/secrets/actions
2. Click "New repository secret"
3. Name: `NPM_TOKEN`
4. Value: Your npm token
5. Click "Add secret"

## 3. Create Initial Release

To publish your first version:

```bash
# Create and push a tag
git tag v1.0.1
git push origin v1.0.1
```

This will trigger the release workflow which will:
- Create a GitHub release
- Publish to npm

## 4. Future Releases

Use the Version Bump workflow:
1. Go to https://github.com/cahaseler/wikijs-mcp/actions/workflows/version-bump.yml
2. Click "Run workflow"
3. Select bump type (patch/minor/major)
4. Merge the created PR
5. The release will happen automatically

## Package Name Availability

Before publishing, check if 'wikijs-mcp' is available:
```bash
npm view wikijs-mcp
```

If it's taken, update the package name in package.json.