---
title: Configuration
description: How to configure Froggit using the froggit.yml file.
---

Froggit can be configured through a YAML file named `froggit.yml`, placed in the same directory as the Froggit executable.

If no configuration file is found, Froggit uses sensible defaults and works out of the box.

## Configuration File

Create a file called `froggit.yml` with the following structure:

```yaml
ui:
  branding: true
  position: "left"

git:
  autofetch: true
  defaultbranch: "main"
```

## Options

### UI Settings

**branding** (boolean, default: `true`)

Controls whether the Froggit title banner is displayed at the top of the interface. Set to `false` to hide it and reclaim vertical space, which can be useful on smaller terminals.

**position** (string, default: `"left"`)

Sets the horizontal alignment of the interface. Accepted values are `"left"`, `"center"`, and `"right"`. The center option also applies vertical centering.

### Git Settings

**autofetch** (boolean, default: `true`)

When enabled, Froggit automatically fetches from the remote repository on startup. This keeps your local view up to date without manual intervention. Set to `false` if you prefer to control when fetching happens.

**defaultbranch** (string, default: `"main"`)

The name of the default branch used when pushing for the first time or when setting up upstream tracking.

## Example Configurations

Minimal configuration that hides branding and disables auto-fetch:

```yaml
ui:
  branding: false

git:
  autofetch: false
```

Centered layout with a custom default branch:

```yaml
ui:
  position: "center"

git:
  defaultbranch: "master"
```
