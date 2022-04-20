## Lifecycles 
 There are three layers of lifecycle methods are :-
 1. Mounting.
 2. Updating.
 3. Unmounting.

# Mounting Phase:
a.Constructor.
b.staticDerivedStateFromProps.
c.render.
d.componentDidMount.

## Updating Phase:
a.staticDerivedStateFromProps.
b.shouldComponentUpdate.
c.render.
d.getSnapshotBeforeupdate.
e.componentDidUpdate.

### Unmounting Phase:
a.componentWillUnmount
