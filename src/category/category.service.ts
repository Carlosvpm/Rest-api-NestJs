import { Injectable } from "@nestjs/common";
import { createResourceService } from "src/shared/services/base-resource.service";
import { Category } from "./category.entity";


@Injectable()
export class CategoryService extends createResourceService(Category) {}

