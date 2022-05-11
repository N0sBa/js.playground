class DOMHelepr {
  static clearEventListeners(element) {
    const cloneElement = element.cloneNode(true);
    element.replaceWith(cloneElement);
    return cloneElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationSelector = document.querySelector(newDestinationSelector);
    destinationSelector.append(element);
  }
}

class ToolTip {}

class ProjectItem {
  constructor(id, updateProjectList, type) {
    this.id = id;
    // console.log(id)
    this.updateProjectListHandler = updateProjectList;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }
  connectMoreInfoButton() {}

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn = DOMHelepr.clearEventListeners(switchBtn);
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Active';
    switchBtn.addEventListener(
      'click',
      this.updateProjectListHandler.bind(null, this.id)
    );
  }

  update(updateProjectFn, type) {
    this.updateProjectListHandler = updateProjectFn;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];
  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), type)
      );
    }
  }

  setSwitchHadnlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    console.log(this.type);
    DOMHelepr.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    this.switchHandler(this.projects.find((item) => item.id === projectId));
    this.projects = this.projects.filter((item) => item.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjects = new ProjectList('active');
    console.log(activeProjects);
    const finishedProjects = new ProjectList('finished');
    activeProjects.setSwitchHadnlerFunction(
      finishedProjects.addProject.bind(finishedProjects)
    );
    finishedProjects.setSwitchHadnlerFunction(
      activeProjects.addProject.bind(activeProjects)
    );
  }
}

App.init();
