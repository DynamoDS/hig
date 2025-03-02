# [@hig/flyout-v2.2.1](https://github.com/Autodesk/hig/compare/@hig/flyout@2.2.0...@hig/flyout@2.2.1) (2022-07-19)


### Bug Fixes

* various uncaught React17 regression errors ([4b3c0aa](https://github.com/Autodesk/hig/commit/4b3c0aa))

# [@hig/flyout-v2.2.0](https://github.com/Autodesk/hig/compare/@hig/flyout@2.1.3...@hig/flyout@2.2.0) (2022-06-15)


### Features

* update react-transition-group ([56b4f6c](https://github.com/Autodesk/hig/commit/56b4f6c))

# [@hig/flyout-v2.1.3](https://github.com/Autodesk/hig/compare/@hig/flyout@2.1.2...@hig/flyout@2.1.3) (2022-04-20)


### Bug Fixes

* Updating the Flyout refs in the callbacks sent as props to the child component ([0791e86](https://github.com/Autodesk/hig/commit/0791e86))

# [@hig/flyout-v2.1.2](https://github.com/Autodesk/hig/compare/@hig/flyout@2.1.1...@hig/flyout@2.1.2) (2022-04-14)


### Bug Fixes

* Updating the Flyout refs after rendering to show tooltip ([0a54812](https://github.com/Autodesk/hig/commit/0a54812))

# [@hig/flyout-v2.1.1](https://github.com/Autodesk/hig/compare/@hig/flyout@2.1.0...@hig/flyout@2.1.1) (2022-04-13)


### Bug Fixes

* Fixing flyout component bug, extra space on the right ([6faaf2a](https://github.com/Autodesk/hig/commit/6faaf2a))

# [@hig/flyout-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/flyout@2.0.0...@hig/flyout@2.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/flyout-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/flyout@1.3.1...@hig/flyout@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/flyout-v1.3.1](https://github.com/Autodesk/hig/compare/@hig/flyout@1.3.0...@hig/flyout@1.3.1) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/flyout-v1.3.0](https://github.com/Autodesk/hig/compare/@hig/flyout@1.2.2...@hig/flyout@1.3.0) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))
* control errors , space lines ([1367496](https://github.com/Autodesk/hig/commit/1367496))
* improve useEffect manage state ([0deebd0](https://github.com/Autodesk/hig/commit/0deebd0))
* onmouseover not working flyout ([cecb453](https://github.com/Autodesk/hig/commit/cecb453))


### Features

* fix lint errors ([2b94e12](https://github.com/Autodesk/hig/commit/2b94e12))
* update Flyout test ([24d8a58](https://github.com/Autodesk/hig/commit/24d8a58))

# [@hig/flyout-v1.2.2](https://github.com/Autodesk/hig/compare/@hig/flyout@1.2.1...@hig/flyout@1.2.2) (2021-02-05)


### Bug Fixes

* pass all props into stylesheet ([c49a4d2](https://github.com/Autodesk/hig/commit/c49a4d2))

# [@hig/flyout-v1.2.1](https://github.com/Autodesk/hig/compare/@hig/flyout@1.2.0...@hig/flyout@1.2.1) (2020-05-12)


### Bug Fixes

* stop using deprecated theme-data roles ([f068af3](https://github.com/Autodesk/hig/commit/f068af3))

# [@hig/flyout-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/flyout@1.1.1...@hig/flyout@1.2.0) (2019-10-10)


### Features

* add stylesheet prop to Flyout ([517a121](https://github.com/Autodesk/hig/commit/517a121))

# [@hig/flyout-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/flyout@1.1.0...@hig/flyout@1.1.1) (2019-08-02)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/utils to version 0.4.0 ([b45496c](https://github.com/Autodesk/hig/commit/b45496c))

# [@hig/flyout-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/flyout@1.0.7...@hig/flyout@1.1.0) (2019-08-02)


### Features

* pass down css className to all emotion styled elements ([a8b4181](https://github.com/Autodesk/hig/commit/a8b4181))

# [@hig/flyout-v1.0.7](https://github.com/Autodesk/hig/compare/@hig/flyout@1.0.6...@hig/flyout@1.0.7) (2019-07-09)


### Bug Fixes

* children's onClick prop is discarded in Flyout ([b538364](https://github.com/Autodesk/hig/commit/b538364))

# [@hig/flyout-v1.0.6](https://github.com/Autodesk/hig/compare/@hig/flyout@1.0.5...@hig/flyout@1.0.6) (2019-07-08)


### Bug Fixes

* remove fixed width ([fa753fb](https://github.com/Autodesk/hig/commit/fa753fb))

# [@hig/flyout-v1.0.5](https://github.com/Autodesk/hig/compare/@hig/flyout@1.0.4...@hig/flyout@1.0.5) (2019-03-20)


### Bug Fixes

* remove transparent border ([5a01bd9](https://github.com/Autodesk/hig/commit/5a01bd9))

# [@hig/flyout-v1.0.4](https://github.com/Autodesk/hig/compare/@hig/flyout@1.0.3...@hig/flyout@1.0.4) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([3b606be](https://github.com/Autodesk/hig/commit/3b606be))

# [@hig/flyout-v1.0.3](https://github.com/Autodesk/hig/compare/@hig/flyout@1.0.2...@hig/flyout@1.0.3) (2019-02-08)


### Bug Fixes

* bump up theme-context dependency ([b068dab](https://github.com/Autodesk/hig/commit/b068dab))

# [@hig/flyout-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/flyout@1.0.1...@hig/flyout@1.0.2) (2019-01-28)


### Bug Fixes

* flyout position design tweak ([3875d8e](https://github.com/Autodesk/hig/commit/3875d8e))

# [@hig/flyout-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/flyout@1.0.0...@hig/flyout@1.0.1) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/theme-context to version 2.0.0 ([cef1d61](https://github.com/Autodesk/hig/commit/cef1d61))

# [@hig/flyout-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/flyout@0.8.1...@hig/flyout@1.0.0) (2019-01-17)


### Bug Fixes

* remove padding based on density spacing ([335dc63](https://github.com/Autodesk/hig/commit/335dc63))


### BREAKING CHANGES

* The padding of the flyout container is 12px across all densities

# [@hig/flyout-v0.8.1](https://github.com/Autodesk/hig/compare/@hig/flyout@0.8.0...@hig/flyout@0.8.1) (2019-01-09)


### Bug Fixes

* flyout throwing console errors ([6cba99d](https://github.com/Autodesk/hig/commit/6cba99d))

# [@hig/flyout-v0.8.0](https://github.com/Autodesk/hig/compare/@hig/flyout@0.7.0...@hig/flyout@0.8.0) (2019-01-04)


### Features

* gives buttons intended height ([9358562](https://github.com/Autodesk/hig/commit/9358562))

# [@hig/flyout-v0.7.0](https://github.com/Autodesk/hig/compare/@hig/flyout@0.6.0...@hig/flyout@0.7.0) (2018-12-11)


### Features

* add stylesheet override for flyout pointer ([947651f](https://github.com/Autodesk/hig/commit/947651f))
* make flyout themeable ([d900626](https://github.com/Autodesk/hig/commit/d900626))
* use theme date for flyout border color ([acfca0d](https://github.com/Autodesk/hig/commit/acfca0d))

# [@hig/flyout-v0.6.0](https://github.com/Autodesk/hig/compare/@hig/flyout@0.5.0...@hig/flyout@0.6.0) (2018-09-26)


### Bug Fixes

*  max-height calc on notifications-flyout ([4581856](https://github.com/Autodesk/hig/commit/4581856))


### Features

* Add prop openOnHover to Flyout.  When enabled, flyout will open when target is hovered over for .5s ([65893f3](https://github.com/Autodesk/hig/commit/65893f3))
* timeout should be cleared no matter whether on mouse leave event exists ([7b3a300](https://github.com/Autodesk/hig/commit/7b3a300))

# [@hig/flyout-v0.5.0](https://github.com/Autodesk/hig/compare/@hig/flyout@0.4.1...@hig/flyout@0.5.0) (2018-09-11)


### Features

* Add onMouseEnter and onMouseLeave events to Button for more control of custom hover events ([a2b2cc1](https://github.com/Autodesk/hig/commit/a2b2cc1))
* **behavior:** add `defaultOpen` prop to support uncontrolled flyout's that are open by default ([7a4e91c](https://github.com/Autodesk/hig/commit/7a4e91c))
* **behavior:** add `dislocateContainer` and `offsetContainerHorizontal` helpers ([97afdc2](https://github.com/Autodesk/hig/commit/97afdc2))
* **presentation:** add support for rendering custom pointers ([d6e6c92](https://github.com/Autodesk/hig/commit/d6e6c92))

# [@hig/flyout-v0.4.1](https://github.com/Autodesk/hig/compare/@hig/flyout@0.4.0...@hig/flyout@0.4.1) (2018-09-06)


### Bug Fixes

* flyout action alignment ([b7f242d](https://github.com/Autodesk/hig/commit/b7f242d))

# [@hig/flyout-v0.4.0](https://github.com/Autodesk/hig/compare/@hig/flyout@0.3.0...@hig/flyout@0.4.0) (2018-08-31)


### Bug Fixes

* correct default anchor points ([5d44e45](https://github.com/Autodesk/hig/commit/5d44e45))
* hide flyout container box model when fully exited ([6bbcd59](https://github.com/Autodesk/hig/commit/6bbcd59))
* remove unused dependency ([ae8058c](https://github.com/Autodesk/hig/commit/ae8058c))


### Features

* add props for positioning ([e50a0fd](https://github.com/Autodesk/hig/commit/e50a0fd))

# [@hig/flyout-v0.3.0](https://github.com/Autodesk/hig/compare/@hig/flyout@0.2.0...@hig/flyout@0.3.0) (2018-08-23)


### Bug Fixes

* move refs inside state to trigger render updates ([a1cc220](https://github.com/Autodesk/hig/commit/a1cc220))
* provide anchorPoint to presenter when no refs are available ([afa9ef6](https://github.com/Autodesk/hig/commit/afa9ef6))


### Features

* **behavior:** correct controlled behavior ([b2bc76a](https://github.com/Autodesk/hig/commit/b2bc76a))

# [@hig/flyout-v0.2.0](https://github.com/Autodesk/hig/compare/@hig/flyout@0.1.1...@hig/flyout@0.2.0) (2018-08-06)


### Features

* **behavior:** add support for customization via render props ([c0cd151](https://github.com/Autodesk/hig/commit/c0cd151))

<a name="@hig/flyout-v0.1.1"></a>
# [@hig/flyout-v0.1.1](https://github.com/Autodesk/hig/compare/@hig/flyout@0.1.0...@hig/flyout@0.1.1) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))

<a name="@hig/flyout-v0.1.0"></a>
# [@hig/flyout-v0.1.0](https://github.com/Autodesk/hig/compare/@hig/flyout@0.0.0...@hig/flyout@0.1.0) (2018-06-19)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))


### Features

* Initialize remaining components to be migrated into packages ([3b654ce](https://github.com/Autodesk/hig/commit/3b654ce))
* **BREAKING DESIGN CHANGE:** Increased padding of the flyout panel from 10px to 12px to standardize spacing ([2d13db2](https://github.com/Autodesk/hig/commit/2d13db2))
* **flyout:** Add Flyout placeholders ([7b32552](https://github.com/Autodesk/hig/commit/7b32552))
* **flyout:** Rewrite Flyout component ([f036408](https://github.com/Autodesk/hig/commit/f036408))
