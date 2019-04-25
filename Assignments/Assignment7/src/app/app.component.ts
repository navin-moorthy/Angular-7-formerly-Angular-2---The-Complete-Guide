import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, this.invalidProjectName],
        this.asyncinvalidProjectName
      ),
      projectEmail: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      projectStatus: new FormControl("critical")
    });
  }

  onSaveProject() {
    console.log(this.projectForm.value);
  }

  invalidProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === "Testing") {
      return { invalidProjectName: true };
    }
    return null;
  }

  asyncinvalidProjectName(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Test") {
          resolve({ invalidProjectName: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
