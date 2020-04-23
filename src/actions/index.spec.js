import * as actions from "./index";

describe("todo actions", () => {
  it("addTodo should create ADD_TODO action", () => {
    expect(actions.addTodo("Use Redux")).toEqual({
      type: "ADD_TODO",
      id: 0,
      text: "Use Redux"
    });
  });

  it("setVisibilityFilter should create SET_VISIBILITY_FILTER action", () => {
    expect(actions.setVisibilityFilter("active")).toEqual({
      type: "SET_VISIBILITY_FILTER",
      filter: "active"
    });
  });

  it("changeTodo should create CHANGE_TODO action", () => {
    const data = {
      text: "Use Redux",
    };
    expect(actions.changeTodo(1, data)).toEqual({
      type: "CHANGE_TODO",
      id: 1,
      data,
    });
  });
});
