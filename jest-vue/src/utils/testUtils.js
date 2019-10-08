const findTestWrapper = (warpper, tag) => {
  return warpper.findAll(`[data-test='${tag}']`)
}

export default {
  findTestWrapper
}
