const first = () => {
  const greet = 'Hiii'
  const second = () => {
    alert(greet)
  }
  return second
}

const newFunc = first()
newFunc()
